// find_pw.js

"use strict";

const user_name = document.querySelector("#user_name");
const user_id = document.querySelector("#user_id");
const user_question = document.querySelector("#user_question");
const user_answer = document.querySelector("#user_answer");
const findButton = document.querySelector("#button");

findButton.addEventListener("click", find_pw);

function find_pw() {
  if (!user_id.value || !user_name.value || !user_question.value || !user_answer.value) {
    return alert("아이디와 이름, 질문, 답변을 모두 입력해주세요.");
  }
  const req = {
    user_name: user_name.value,
    user_id: user_id.value,
    user_question: user_question.value,
    user_answer: user_answer.value,
  };

  fetch("/find_pw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = `/new_pw?user_id=${user_id.value}`;
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("비밀번호 찾기 중 에러 발생");
    });
}
