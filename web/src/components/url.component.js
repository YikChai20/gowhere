import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { 
    Box, Paper, TextField, Button, Typography, LinearProgress
  } from "@mui/material";
import { getUrls, createUrl, clearUrlMessage } from "../store/url/actions";
import Notification from './notification.component';
const REACT_APP_APP_URL = process.env.REACT_APP_APP_URL;

function Url() {
    const dispatch = useDispatch();

    const {urls, error, loading } = useSelector((state) => state.UrlReducer);
    const [longUrlInput, setLongUrlInput] = useState("");
    const [validUrl, setValidUrl] = useState(true);

    useEffect(() => {
        dispatch(getUrls());
    }, [dispatch]);

    // Close notification box
    useEffect(() => {
        if(error.message) {
        const timer = setTimeout(() => dispatch(clearUrlMessage()), 5000);
        return () => clearTimeout(timer);
        }
    }, [error, dispatch]);

    // Set columns in table
    const columns = [
        {
            name: "ID",
            selector: "id",
            sortable: true,
            width: "13%"
        },
        {
            name: "Original URL",
            selector: "url",
            sortable: true
        },
        {
            name: "Short URL",
            selector: "shortUrl",
            sortable: true,
            width: "30%",
            cell: (row) => (
                <a href={`${REACT_APP_APP_URL}${row.shortUrl}`} target="_blank" rel="noreferrer">{row.shortUrl}</a>
            )
        }
    ];

    // Function to check is the url valid
    const isValidUrl = urlString => {
        try { 
            return Boolean(new URL(urlString)); 
        }
        catch(e){ 
            return false; 
        }
    }

    // Function to handle submit data
    const handleSubmit = (e) => {
        e.preventDefault();
        if(isValidUrl(longUrlInput)) {
            dispatch(createUrl({"url": longUrlInput}));
        }else {
            setValidUrl(false);
        }
    }

    // Function to handle url input
    const handleLongUrlInput = (e) => {
        e.preventDefault();
        setLongUrlInput(e.target.value);
        if(!validUrl) {
            setValidUrl(true);
        }
    }

    return (
        <Paper sx={{width: "60%", margin: "auto", marginTop: "20px", padding: "0px 20px 0px 20px", background: "#f4fbff"}}>
            <Box sx={{paddingTop: "20px"}}>
                <h2>URL Shortener</h2>
            </Box>
            <Box sx={{padding: "0 20px 20px 20px"}}>
                <h3>Convert Long Url to Short Url</h3>
            </Box>
            {error.message && <Notification error={error}/>}
            <Box>
                <TextField
                    onChange={(e)=>handleLongUrlInput(e)}
                    value={longUrlInput}
                    placeholder="Enter Long Url"
                    fullWidth
                />
                {!validUrl && <Typography sx={{color: "red"}}>Invalid URL</Typography>}
                <Button
                    sx={{margin: "20px 0px 30px 0px"}}
                    variant="contained"
                    color="primary"
                    disabled={loading || longUrlInput.length === 0}
                    onClick={(e) => handleSubmit(e)}
                >
                    Shorten URL
                </Button>
            </Box>
            {loading && <LinearProgress variant="indeterminate" color="primary"/>}
            <Box sx={{padding: "10px", alignItems: "left"}}>
                <Box sx={{textAlign: "start", paddingTop: "10px"}}>
                    <h3>URL List</h3>
                </Box>
                <Box sx={{minHeight: "50vh", maxHeight: "60vh", overflowY: "auto",}}>
                    <DataTable
                        columns={columns}
                        data={urls}
                        highlightOnHover
                    />
                </Box>
            </Box>
        </Paper>
    );
};

export default Url;
