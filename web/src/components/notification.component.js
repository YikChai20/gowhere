function Notification({error}) {
    return (
        <div class={`alert alert-${error.type}`} role="alert">
            {error.message}
        </div>    
    );
};

export default Notification;