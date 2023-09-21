"use strict";

const user_id = document.querySelector("#user_id"),
  user_pw = document.querySelector("#user_pw"),
  loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
  if (!user_id.value) return alert("아이디를 입력해주십시오.");
  if (!user_pw.value) return alert("비밀번호를 입력해주십시오.");

  const req = {
    user_id: user_id.value,
    user_pw: user_pw.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        if (res.err) return alert(res.err);
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("로그인 중 에러 발생");
    });
}
