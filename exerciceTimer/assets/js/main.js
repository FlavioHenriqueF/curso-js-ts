const timer = document.querySelector(".timer");

let countSeconds = 0;
let countMinutes = 0;
let countHours = 0;

timer.innerHTML = `00:00:00`;

function formatHours(n) {
  return n < 10 ? `0${n}` : n;
}

playTimer = () => {
  const interval = setInterval(() => {
    countSeconds++;
    const seconds = formatHours(countSeconds);
    const minutes = formatHours(countMinutes);
    const hours = formatHours(countHours);

    if (countSeconds >= 59) {
      countSeconds = 0;
      countMinutes++;
    }
    if (countMinutes >= 59) {
      countMinutes = 0;
      countHours++;
    }

    stopCount(interval);
    resetCount(interval);

    timer.innerHTML = `${hours}:${minutes}:${seconds}`;
  }, 1000);
};

stopCount = (n) => {
  stopTimer = () => {
    clearInterval(n);
    timer.style.color = "red";
  };
};

resetCount = (n) => {
  resetTimer = () => {
    clearInterval(n);
    countSeconds = 0;
    countMinutes = 0;
    countHours = 0;
    timer.style.color = "#000";
    timer.innerHTML = "00:00:00";
  };
};
