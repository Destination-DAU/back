"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");

const output = {
  home: (req, res) => {
    logger.info(`GET / 304 "홈 화면으로 이동"`);
    res.render("home/index");
  },

  login: (req, res) => {
    logger.info(`GET /login 304 "로그인 화면으로 이동"`);
    res.render("home/login");
  },

  sign_up: (req, res) => {
    logger.info(`GET /sign_up 304 "회원가입 화면으로 이동"`);
    res.render("home/sign_up");
  },
  
  find_id: (req, res) => {
    logger.info(`GET /find_id 304 "아이디 찾기 화면으로 이동"`);
    res.render("home/find_id");
  },

  find_pw: (req, res) => {
    logger.info(`GET /find_pw 304 "비밀번호 찾기 화면으로 이동"`);
    res.render("home/find_pw");
  },

  new_pw: (req, res) => {
    logger.info(`GET /new_pw 304 "새 비밀번호 화면으로 이동"`);
    res.render("home/new_pw");
  },
  Create_room: (req, res) => {
    logger.info(`GET /Create_room 304 "게시물 생성 화면으로 이동"`);
    res.render("home/Create_room");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    const response = await user.login();

    const url = {
      method: "POST",
      path: "/login",
      status: response.err ? 400 : 200,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },

  sign_up: async (req, res) => {
    const user = new User(req.body);
    const response = await user.sign_up();

    const url = {
      method: "POST",
      path: "/sign_up",
      status: response.err ? 409 : 201,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },

  find_id: async (req, res) => {
    const user = new User(req.body);
    const response = await user.find_id();

    const url = {
      method: "POST",
      path: "/find_id",
      status: response.err ? 409 : 201,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },

  find_pw: async (req, res) => {
    const user = new User(req.body);
    const response = await user.find_pw();

    const url = {
      method: "POST",
      path: "/find_pw",
      status: response.err ? 409 : 201,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },

  new_pw: async (req, res) => {
    const user = new User(req.body);
    const response = await user.new_pw();

    const url = {
      method: "POST",
      path: "/new_pw",
      status: response.err ? 409 : 201,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },

  Create_room: async (req, res) => {
    const user = new User(req.body);
    const response = await user.Create_room();

    const url = {
      method: "POST",
      path: "/Create_room",
      status: response.err ? 409 : 201,
    };

    log(response, url);
    return res.status(url.status).json(response);
  },
};

module.exports = {
  output,
  process,
};

const log = (response, url) => {
  if (response.err) {
    logger.error(
      `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`
    );
  } else {
    logger.info(
      `${url.method} ${url.path} ${url.status} Response: ${response.success} ${
        response.msg || ""
      }`
    );
  }
};
