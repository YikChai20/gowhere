const controller = require("../controllers/url");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/url/create",
    controller.createUrl
  );

  app.get("/url/list",
    controller.getUrlList
  );

  app.get("/:shortUrl",
    controller.getUrl
  );
};