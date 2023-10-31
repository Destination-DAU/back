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
  Search_room: async (req, res) => {
    const user = new User(req.body);
    const response = await user.Search_room();
  
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(409).json(response);
    }
  },
  
  Detail_room: async (req, res) => {
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(409).json(response);
    }
  },

  Check_data: async (req, res) => {
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(409).json(response);
    }
  },
  My_room: async (req, res) => {
    const user = new User(req.body);
    const response = await user.My_room();
  
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(409).json(response);
    }
  },
  Exit_room: async (req, res) => {
    const user = new User(req.body);
    const response = await user.Exit_room();
  
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(409).json(response);
    }
  },
  Delete_room: async (req, res) => {
    const user = new User(req.body);
    const response = await user.Delete_room();
  
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(409).json(response);
    }
  },
  My: async (req, res) => {
    const user = new User(req.body);
    const response = await user.My();
  
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(409).json(response);
    }
  },

  Update_user: async (req, res) => {
    const user = new User(req.body);
    const response = await user.Update_user();
  
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(409).json(response);
    }
  },

  Update_bank: async (req, res) => {
    const user = new User(req.body);
    const response = await user.Update_bank();
  
    if (response.success) {
      return res.status(200).json(response);
    } else {
      return res.status(409).json(response);
    }
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
  Search_room: async (req, res) => {
    const user = new User(req.body);
    const response = await user.Search_room();

    const url = {
      method: "GET",
      path: "/Search_room",
      status: response.err ? 409 : 201,
    };

    
    log(response, url);
    return res.status(url.status).json(response);
  },

  Detail_room: async (req, res) => {
    const user = new User(req.body);
    const response = await user.Detail_room();

    const url = {
      method: "POST",
      path: "/Detail_room",
      status: response.err ? 409 : 201,
    };

    
    log(response, url);
    return res.status(url.status).json(response);
  },

  Check_data: async (req, res) => {
    const user = new User(req.body);
    const response = await user.Check_data();

    const url = {
      method: "POST",
      path: "/Check_data",
      status: response.err ? 409 : 201,
    };

    
    log(response, url);
    return res.status(url.status).json(response);
  },

  My_room: async (req, res) => {
    const user = new User(req.body);
    const response = await user.My_room();

    const url = {
      method: "POST",
      path: "/My_room",
      status: response.err ? 409 : 201,
    };

    
    log(response, url);
    return res.status(url.status).json(response);
  },

  Exit_room: async (req, res) => {
    const user = new User(req.body);
    const response = await user.Exit_room();

    const url = {
      method: "POST",
      path: "/Exit_room",
      status: response.err ? 409 : 201,
    };

    
    log(response, url);
    return res.status(url.status).json(response);
  },

  Delete_room: async (req, res) => {
    const user = new User(req.body);
    const response = await user.Delete_room();

    const url = {
      method: "POST",
      path: "/Delete_room",
      status: response.err ? 409 : 201,
    };

    
    log(response, url);
    return res.status(url.status).json(response);
  },

  My: async (req, res) => {
    const user = new User(req.body);
    const response = await user.My();

    const url = {
      method: "POST",
      path: "/My",
      status: response.err ? 409 : 201,
    };

    
    log(response, url);
    return res.status(url.status).json(response);
  },

  Update_user: async (req, res) => {
    const user = new User(req.body);
    const response = await user.Update_user();

    const url = {
      method: "POST",
      path: "/Update_user",
      status: response.err ? 409 : 201,
    };

    
    log(response, url);
    return res.status(url.status).json(response);
  },

  Update_bank: async (req, res) => {
    const user = new User(req.body);
    const response = await user.Update_bank();

    const url = {
      method: "POST",
      path: "/Update_bank",
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
