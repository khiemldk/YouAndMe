const routers = require("next-routes")();

routers.add("login", "/login");
routers.add("timeline", "/timeline/:slug?");
routers.add("newsfeed", "/newsfeed/:slug?");
module.exports = routers;