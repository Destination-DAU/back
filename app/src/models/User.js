"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.user_id);

      if (user) {
        if (user.user_id === client.user_id && user.user_pw === client.user_pw) {
          return { success: true };
        }
        return { success: false, msg: "비밀번호가 틀렸습니다." };
      }
      return { success: false, msg: "존재하지 않는 아이디입니다." };
    } catch (err) {
      return { success: false, err };
    }
  }

  async sign_up() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.user_id);
      if(user){
        if(user.user_id !== client.user_id){
          return {success : true}
        }
        else return {success : false, msg : "이미 존재하는 아이디 입니다."}
      }
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async find_id() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserName(client);

      if (user) {
        return { success: true, user_id: user.user_id };
      } else {
        return { success: false, msg: "일치하는 정보를 찾을 수 없습니다." };
      }
    } catch (err) {
      return { success: false, err };
    }
  }

  async find_pw() {
    const client = this.body;
    try {
      const user = await UserStorage.getUserInfo(client.user_id);

      if (user) {
        if (
          user.user_name === client.user_name &&
          user.user_question === client.user_question &&
          user.user_answer === client.user_answer
        ) {
          return { success: true };
        } else {
          return { success: false, msg: "일치하는 정보를 찾을 수 없습니다." };
        }
      } else {
        return { success: false, msg: "존재하지 않는 아이디입니다." };
      }
    } catch (err) {
      return { success: false, err };
    }
  }

  async new_pw() {
    const client = this.body;
    try {
      const response = await UserStorage.changePassword(
        client.user_id,
        client.user_pw,
      );
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async Create_room() {
    const client = this.body;
    try {
      const response = await UserStorage.saveRoom(client);
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async Search_room() {
    try {
      const response = await UserStorage.searchRoom(this.body);
      // 서버에서 반환한 데이터 확인
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async Detail_room() {
    const client = this.body;
    try {
      const response = await UserStorage.detailRoom(this.body);
      // 서버에서 반환한 데이터 확인
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async Check_data() {
    const client = this.body;
    try {
      const response = await UserStorage.checkData(this.body);
      // 서버에서 반환한 데이터 확인
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }

  async Person_check() {
    try {
      const response = await UserStorage.checkPerson(this.body);
      // 서버에서 반환한 데이터 확인
      return response;
    } catch (err) {
      return { success: false, err };
    }
  }
}

module.exports = User;