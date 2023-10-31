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
router.get("/Search_room", ctrl.output.Search_room);
router.get("/Detail_room", ctrl.output.Detail_room);
router.get("/Check_data", ctrl.output.Check_data);
router.get("/My_room", ctrl.output.My_room);
router.get("/Exit_room", ctrl.output.Exit_room);
router.get("/Delete_room", ctrl.output.Delete_room);
router.get("/My", ctrl.output.My);
router.get("/Update_user", ctrl.output.Update_user);
router.get("/Update_bank", ctrl.output.Update_bank);












router.post("/login", ctrl.process.login);
router.post("/sign_up", ctrl.process.sign_up);
router.post("/find_id", ctrl.process.find_id);
router.post("/find_pw", ctrl.process.find_pw);
router.post("/new_pw", ctrl.process.new_pw);
router.post("/Create_room", ctrl.process.Create_room);
router.post("/Search_room", ctrl.process.Search_room);
router.post("/Detail_room", ctrl.process.Detail_room);
router.post("/Check_data", ctrl.process.Check_data);
router.post("/My_room", ctrl.process.My_room);
router.post("/Exit_room", ctrl.process.Exit_room);
router.post("/Delete_room", ctrl.process.Delete_room);
router.post("/My", ctrl.process.My);
router.post("/Update_user", ctrl.process.Update_user);
router.post("/Update_bank", ctrl.process.Update_bank);








module.exports = router;
