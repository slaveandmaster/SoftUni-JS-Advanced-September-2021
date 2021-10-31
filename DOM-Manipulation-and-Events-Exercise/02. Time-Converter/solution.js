function attachEventsListeners() {
  const units = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };
  function convert(value, unit) {
    const calcDays = value / units[unit];
    return {
      days: calcDays,
      hours: calcDays * units.hours,
      minutes: calcDays * units.minutes,
      seconds: calcDays * units.seconds,
    };
  }
  let inputs = Object.keys(units)
    .map((x) => document.getElementById(x))
    .reduce((acc, current) => {
      Object.assign(acc, { [current.id]: current });
      return acc;
    }, {});

  let main = document.querySelector("main");
  //   let inDays = document.getElementById("days");
  //   let inHours = document.getElementById("hours");
  //   let inMinutes = document.getElementById("minutes");
  //   let inSeconds = document.getElementById("seconds");
  main.addEventListener("click", (e) => {
    if (e.target.type == "button") {
      let parentEl = e.target.parentElement.querySelector("input[type=text]");
      let inputValue = parentEl.value;
      let unitValue = parentEl.id;
      let result = convert(inputValue, unitValue);
      Object.keys(result).forEach((r) => (inputs[r].value = result[r]));
    }
  });
}
