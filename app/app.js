"use strict";

// 모듈
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path")

dotenv.config();

const app = express();
app.use(express.static(path.join(__dirname, "src")))

const http = require("http")
const server = http.createServer(app)
const socketIO = require("socket.io")
const io = socketIO(server)
const logger = require("../app/src/config/logger.js");
const PORT = process.env.PORT || 3000;
const moment = require("moment")

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", home); // use -> 미들 웨어를 등록해주는 메서드.




server.listen(PORT, () => {
  logger.info(`${PORT} 포트에서 서버가 가동되었습니다.`);
});

io.on("connection", (socket)=>{
    socket.on("chatting", (data)=>{
      const { name, msg } = data;
        io.emit("chatting", {
          name,
          msg,
          time: moment(new Date()).format("h:mm A")
        })
    })
})

module.exports = app;
