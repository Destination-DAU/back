"use strict";

const db = require("../config/db");

class UserStorage {
  static getUserInfo(user_id) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE user_id = ?;";
      db.query(query, [user_id], (err, data) => {
        if (err) reject(`${err}`);
        else resolve(data[0]);
      });
    });
  }

  static async save(userInfo) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO users(user_name, user_id, user_pw, user_gender, user_question, user_answer) VALUES(?, ?, ?, ?, ?, ?);";
      db.query(query, [userInfo.user_name, userInfo.user_id, userInfo.user_pw, userInfo.user_gender, userInfo.user_question,userInfo.user_answer], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }

  static getUserName(client) {
    return new Promise((resolve, reject) => {
      const query =
        "SELECT * FROM users WHERE user_name = ? AND user_question = ? AND user_answer = ?;";
      db.query(
        query,
        [
          client.user_name,
          client.user_question,
          client.user_answer,
        ],
        (err, data) => {
          if (err) reject(`${err}`);
          else resolve(data[0]);
        }
      );
    });
  }

  static async changePassword(user_id, user_pw) {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE users SET user_pw = ? WHERE user_id = ?;";
      db.query(query, [user_pw, user_id], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }

  static async saveRoom(client) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO rooms(user_id, room_startPoint, room_endPoint, room_name, room_person, room_startTime) VALUES(?,?,?,?,?,?);";
      db.query(query, [
        client.user_id,
        client.room_startPoint,
        client.room_endPoint,
        client.room_name,
        client.room_person,
        client.room_startTime,
      ], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });
    });
  }
}

module.exports = UserStorage;