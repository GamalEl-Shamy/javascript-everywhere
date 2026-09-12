// ----------- 6.1
const scoreInput = document.getElementById("scoreInput");
const checkButton = document.getElementById("checkButton");
const clearButton = document.getElementById("clearButton");
const message = document.getElementById("message");
const historyList = document.getElementById("historyList");

const history = [];

checkButton.addEventListener("click", () => {
  const score = Number(scoreInput.value);

  if (scoreInput.value.trim() === "" || Number.isNaN(score)) {
    message.textContent = "Please enter a number between 0 and 100";
    return;
  }

  if (score < 0 || score > 100) {
    message.textContent = "Please enter a number between 0 and 100";
    return;
  }


  let grade;

  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }


  history.push({
    score: score,
    grade: grade,
  });


  historyList.innerHTML = "";

  for (const item of history) {
    const listItem = document.createElement("li");

    listItem.textContent = `${item.score} → ${item.grade}`;

    historyList.appendChild(listItem);
  }


  console.log(history);


  message.textContent = `Grade: ${grade}`;
});

clearButton.addEventListener("click", () => {
  history.length = 0;
  historyList.innerHTML = "";
  message.textContent = "";

  console.log(history);
});