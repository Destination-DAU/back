// new_pw.js

"use strict";

const user_pw = document.querySelector("#user_pw");
const confirm_psword = document.querySelector("#confirm-psword");
const changeButton = document.querySelector("#button");

changeButton.addEventListener("click", new_pw);

function new_pw() {
  if (!user_pw.value || !confirm_psword.value) {
    return alert("새 비밀번호와 비밀번호 확인을 모두 입력해주세요.");
  }

  if (user_pw.value !== confirm_psword.value) {
    return alert("새 비밀번호와 비밀번호 확인이 일치하지 않습니다.");
  }

  const req = {
    user_id: new URLSearchParams(window.location.search).get("user_id"),
    user_pw: user_pw.value,
  };

  fetch("/new_pw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("비밀번호가 성공적으로 변경되었습니다.");
        location.href = "/login"; // 비밀번호 변경 후 로그인 페이지로 이동
      } else {
        if (res.msg) {
          alert(res.msg);
        } else {
          alert("비밀번호 변경 중 오류가 발생했습니다.");
        }
      }
    })
    .catch((err) => {
      console.error("비밀번호 변경 중 에러 발생");
    });
}

