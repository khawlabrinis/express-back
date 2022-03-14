const memberController = require("../../app/controllers/memberController");
const express = require("express");
const router = express.Router();

console.log(memberController);
router.post("/", memberController.createMember);
router.get("/", memberController.getAllMember);
router.delete("/:id", memberController.deleteMember);

module.exports = router;
