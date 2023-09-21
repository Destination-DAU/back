"use strict";

const user_name = document.querySelector("#user_name");
const user_question = document.querySelector("#user_question");
const user_answer = document.querySelector("#user_answer");
const button = document.querySelector("#button");

button.addEventListener("click", find_id);

function find_id() {
  if (!user_name.value || !user_question.value || !user_answer.value) {
    return alert("이름과 질문, 답변을 모두 입력해주세요.");
  }

  const req = {
    user_name: user_name.value,
    user_question: user_question.value,
    user_answer: user_answer.value,
  };

  fetch("/find_id", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert(`찾은 아이디는 ${res.user_id} 입니다.`);
        location.href = "/login";
        
      } else {
        if (res.err) {
          alert(res.err);
        } else {
          alert(res.msg);
        }
      }
    })
    .catch((err) => {
      console.error("아이디 찾기 중 에러 발생");
    });
}
