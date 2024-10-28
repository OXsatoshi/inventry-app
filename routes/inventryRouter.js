const Router = require("express");
const viewController = require("../controller/viewController");
const inventryRouter = Router();

inventryRouter.get("/", viewController.getHome);
inventryRouter.get("/allrelease", viewController.getAllRelease);
inventryRouter.get("/album", viewController.getAllAlbum);
module.exports = inventryRouter;
