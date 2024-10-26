const Router = require("express");
const viewController = require("../controller/viewController");
const inventryRouter = Router();

inventryRouter.get("/", viewController.getHome);
module.exports = inventryRouter;
