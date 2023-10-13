"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/sign_up", ctrl.output.sign_up);
router.get("/find_id", ctrl.output.find_id);
router.get("/find_pw", ctrl.output.find_pw);
router.get("/new_pw", ctrl.output.new_pw);
router.get("/Create_room", ctrl.output.Create_room);



router.post("/login", ctrl.process.login);
router.post("/sign_up", ctrl.process.sign_up);
router.post("/find_id", ctrl.process.find_id);
router.post("/find_pw", ctrl.process.find_pw);
router.post("/new_pw", ctrl.process.new_pw);
router.post("/Create_room", ctrl.process.Create_room);



module.exports = router;
