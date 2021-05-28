const routers = require("next-routes")();

routers.add("login", "/login")
routers.add("timeline", "/timeline")

module.exports = routers;