const { Router } = require("express");
const controller = require('./controller');

const router = Router();


router.get("/", controller.getblogs);
router.post("/", controller.addBlog);
router.get("/:id", controller.getblogById);
router.put("/:id", controller.updateblog);
router.delete("/:id", controller.removeBlog);



module.exports = router;