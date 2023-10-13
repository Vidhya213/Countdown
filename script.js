const items = document.querySelectorAll(".deadline-format h4");
const futureDate = new Date("2023-10-28T10:30:00");
const giveaway = document.querySelector("#countdown-text");
function updateGiveawayText() {
  const year = futureDate.getFullYear();
  const month = futureDate.toLocaleString("default", { month: "long" });
  const weekday = futureDate.toLocaleString("default", { weekday: "long" });
  const date = futureDate.getDate();
  const hours = futureDate.getHours();
  const minutes = futureDate.getMinutes();
  giveaway.textContent = `Giveaway Ends On ${weekday}, ${date} ${month} ${year} ${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}am`;
}
updateGiveawayText();
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const futureTime = futureDate.getTime();
function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;
  if (t <= 0) {
    clearInterval(countdown);
    giveaway.textContent = "Giveaway has ended!";
  } else {
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor(
      (t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const remainingMinutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((t % (1000 * 60)) / 1000);
    items[0].textContent = days;
    items[1].textContent = remainingHours;
    items[2].textContent = remainingMinutes;
    items[3].textContent = seconds;
  }
}
getRemainingTime();
const countdown = setInterval(getRemainingTime, 1000);
