"use strict";

const user_name = document.querySelector("#user_name"),
  user_id = document.querySelector("#user_id"),
  user_pw = document.querySelector("#user_pw"),
  confirmPsword = document.querySelector("#confirm-psword"),
  user_gender = document.querySelector('#user_gender'),
  user_question = document.querySelector("#user_question"),
  user_answer = document.querySelector('#user_answer'),
  registerBtn = document.querySelector("#button");
registerBtn.addEventListener("click", sign_up);

function sign_up() {
  if (!user_id.value) return alert("아이디를 입력해주십시오.");
  if (!user_pw.value) return alert("비밀번호를 입력해주십시오.");
  if (user_pw.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");
  if (!user_gender.value) return alert("성별을 입력해주십시오.");
  if (!user_question.value) return alert("질문을 입력해주십시오.");
  if (!user_answer.value) return alert("답변을 입력해주십시오.");

  const req = {
    user_name: user_name.value,
    user_id: user_id.value,
    user_pw: user_pw.value,
    user_gender: user_gender.value,
    user_question: user_question.value,
    user_answer: user_answer.value,
  };

  fetch("/sign_up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        if (res.err) return alert("이미 존재하는 아이디 입니다.");
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("회원가입 중 에러 발생");
    });
}
