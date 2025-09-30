const express = require("express");
const controller = require("../controllers/users.controllers");

const router = express.Router();

router.get("/", controller.findAll);
router.get("/:id",controller.findByID);
router.post("/",controller.addUser);
router.put("/;id",controller.updateUser);
module.exports = router;