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
      const query = "INSERT INTO users(user_name, user_id, user_pw, user_gender, user_question, user_answer, user_phoneNumber) VALUES(?, ?, ?, ?, ?, ?,?);";
      db.query(query, [userInfo.user_name, userInfo.user_id, userInfo.user_pw, userInfo.user_gender, userInfo.user_question, userInfo.user_answer, userInfo.user_phoneNumber], (err) => {
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
      const query = "INSERT INTO rooms(user_id, room_startPoint, room_endPoint, room_name, room_person, room_startTime, room_origin_lat, room_origin_lon, room_destination_lat, room_destination_lon, user1) VALUES(?,?,?,?,?,?,?,?,?,?,?);";
      db.query(query, [
        client.user_id,
        client.room_startPoint,
        client.room_endPoint,
        client.room_name,
        client.room_person,
        client.room_startTime,
        client.room_origin_lat,
        client.room_origin_lon,
        client.room_destination_lat,
        client.room_destination_lon,
        client.user1,
      ], (err) => {
        if (err) reject(`${err}`);
        else resolve({ success: true });
      });

      // const query3 = "INSERT INTO join_room(user1) VALUES(?)";
      // db.query(query3, [
      //   client.user_id,
      // ], (err) => {
      //   if (err) reject(`${err}`);
      //   else resolve({ success: true });
      // })
    });
  }

  static async searchRoom(client) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM rooms";
      db.query(query, [
        client.user_id,
        client.room_number,
        client.room_startPoint,
        client.room_endPoint,
        client.room_name,
        client.room_person,
        client.room_startTime,
        client.room_origin_lat,
        client.room_origin_lon,
        client.room_destination_lat,
        client.room_destination_lon,
      ], (err, result) => {
        if (err) reject(err);
        else resolve({ success: true, result });
      });
    });
  }

  static async detailRoom(client) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM rooms WHERE room_number = ?";
      db.query(query, [
        client.room_number,
      ], (err, result) => {
        if (err) reject(err);
        else resolve({ success: true, result });
      });
    });
  }

  static async checkData(client) {
    return new Promise((resolve, reject) => {
      console.log(client.room_number, client.user, client.user_name);
      let query2 = `UPDATE rooms SET ${client.user} = ? WHERE room_number = ?`;;
      db.query(query2,[
        client.user_name,
        client.room_number,
      ], (err, result) =>{
        if(err) reject(err)
        else resolve({ success : true, result});
      })
    });
  }

  static async My_rooms(client) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM rooms where user1 = ? or user2 = ? or user3 = ? or user4 = ?";
      db.query(query, [
        client.user_name,
        client.user_name,
        client.user_name,
        client.user_name,
      ], (err, result) => {
        if (err) reject(err);
        else resolve({ success: true, result });
      });
    });
  }

  static async exit_rooms(client) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE rooms SET ${client.user} = NULL WHERE room_number = ?`;
      db.query(query, [
        client.room_number,
      ], (err, result) => {
        if (err) reject(err);
        else resolve({ success: true, result });
      });
    });
  }

  static async delete_room(client) {
    return new Promise((resolve, reject) => {
      const query = `DELETE FROM rooms WHERE room_number = ?`;
      db.query(query, [
        client.room_number,
      ], (err, result) => {
        if (err) reject(err);
        else resolve({ success: true, result });
      });
    });
  }

  static async my(client) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE user_id = ?`;
      db.query(query, [
        client.user_id,
      ], (err, result) => {
        if (err) reject(err);
        else resolve({ success: true, result });
      });
    });
  }

  static async update_user(client) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE users SET user_name = ? WHERE user_id = ?`;
      db.query(query, [
        client.user_name,
        client.user_id,
      ], (err, result) => {
        if (err) reject(err);
        else resolve({ success: true, result });
      });
    });
  }

  static async update_bank(client) {
    return new Promise((resolve, reject) => {
      const query = `UPDATE users SET user_bank = ? WHERE user_id = ?`;
      const query2 = `UPDATE users SET user_bnum = ? WHERE user_id = ?`;
      
      db.query(query, [
        client.user_bank,
        client.user_id,
      ], (err, result) => {
        if (err) reject(err);
        else resolve({ success: true, result });
      });

      db.query(query2, [
        client.user_bnum,
        client.user_id,
      ], (err, result) => {
        if (err) reject(err);
        else resolve({ success: true, result });
      });
    
    });
  }

}

module.exports = UserStorage;