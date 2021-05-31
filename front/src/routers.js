const routers = require("next-routes")();

routers.add("login", "/login");
routers.add("timeline", "/timeline");
routers.add("newsfeed", "/newsfeed");
module.exports = routers;