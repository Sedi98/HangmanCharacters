function getData() {
  let randomizedData = Math.floor(Math.random() * gameData.length);
  return gameData[randomizedData];
}

function renderData() {
  let data = getData();
  splittedWord = data.word.split("");
  chance = Math.floor(splittedWord.length / 2);
  modifyDom(data);
  return splittedWord;
}

function modifyDom(data) {
  textDiv.innerHTML = "";
  img.src = data.photo;
  let word = data.word;
  remainingNum.textContent = chance;
  for (let i = 0; i < word.length; i++) {
    textDiv.innerHTML += "<span class='textSpan'>_</span>";
    count++;
  }
}

function checkLetter() {
  console.log(count);
  if (count === 0) {
    alert("you win");
    setTimeout(gameReset, 2000);
  }

  if (chance === 0) {
    alert("you lose");
    setTimeout(gameReset, 2000);
  }
}


function gameReset() {
  window.location.reload();
}

renderData();

document.addEventListener("keyup", (event) => {
  let textSpan = document.querySelectorAll(".textSpan");
  console.log(event.key);
  let letter = "";

  for (let i = 0; i < splittedWord.length; i++) {
    if (splittedWord[i] === event.key) {
      textSpan[i].textContent = event.key;
      letter = splittedWord[i];
      splittedWord[i] = null;

      count--;
    }
  }

  if (letter !== event.key) {
    chance--;
    remainingNum.textContent = chance;
    wrongLetterArr.push(event.key);
    wrongLetterSpan.textContent = wrongLetterArr.join(",");
  }

  checkLetter();
  console.log(splittedWord);
});
