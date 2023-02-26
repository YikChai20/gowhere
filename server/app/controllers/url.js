const db = require("../models");
const Url = db.url;
const shortid = require('shortid');

// Shorten url and save to database
exports.createUrl = async (req, res) => {
  try {
    // Assume url & shortUrl are unique
    const url = await Url.create({
      url: req.body.url,
      shortUrl: shortid.generate()
    });

    const result = url.dataValues;
    if (result) {
      res.status(200)
      res.json({
        data: result,
        message: "Shorten url created successfully!"
      });
    }
  } catch (error) {
    return res.status(500).send({ message: "Error: " + error.message + ". Please check is the url duplicate or incorrect!" });
  }
};

// Get all shorten url list
exports.getUrlList = async (req, res) => {
  const urls = await Url.findAll({
    attributes: ['id', 'url', 'shortUrl'],
  });
  res.status(200)
  res.json({
    data: urls
  });
};

// Redirect to original url when serve shorten url
exports.getUrl = async (req, res) => {
  const url = await Url.findOne({
    where: {
      shortUrl: req.params.shortUrl,
    }
  });

  if (url && url.dataValues) {
    const result = url.dataValues;
    return res.redirect(result.url);
  }else {
    return res.status(500).send({ message: "Url not found!" });
  }
};
