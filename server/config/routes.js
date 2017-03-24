var users = require("./../controllers/users.js");
var surveys = require("./../controllers/surveys.js");
var options = require("./../controllers/options.js");

module.exports = function(app){
  app.post("/users/login", users.login);
  app.post("/users/logout", users.logout);
  app.post("/users/check", users.check);

  app.get("/surveys", surveys.index);
  app.get("/surveys/:id", surveys.show);
  app.post("/surveys", surveys.create);
  app.delete("/surveys/:id", surveys.destroy);

  app.post("/options/:id/like", options.vote);
};
