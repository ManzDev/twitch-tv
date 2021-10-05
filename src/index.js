import "./components/RetroTVScreen.js";

const TWITCH_CHANNELS = [
  "ManzDev",
  "S4vitaar",
  "midudev",
  "GoncyPozzo",
  "DorianDesings",
  "mouredev",
  "fpiaggio",
  "PabloSirera",
  "AristiDevs",
  "RafaLagoon",
  "danirod_",
  "DesarrolloUtil"
];

const [channelButton, volumeButton] = document.querySelectorAll(".dial");

const screen = document.querySelector("retro-tv-screen");

const moveSelector = (button, direction) => {
  const oldValue = button.style.getPropertyValue("--value");
  const newValue = parseInt(oldValue) + 30 * direction;
  button.style.setProperty("--value", `${newValue}deg`);
  return newValue;
};

const moveChannelSelector = (button, direction = 1, event) => {
  event.preventDefault();
  const newValue = moveSelector(button, direction);
  const channelNumber = (newValue % 360) / 30;
  screen.changeChannel(TWITCH_CHANNELS[channelNumber]);
};

const moveVolumeSelector = (button, direction = 1, event) => {
  event.preventDefault();
  moveSelector(button, direction);
};

channelButton.addEventListener("click", (ev) => moveChannelSelector(channelButton, 1, ev));
channelButton.addEventListener("contextmenu", (ev) => moveChannelSelector(channelButton, -1, ev));
volumeButton.addEventListener("click", (ev) => moveVolumeSelector(volumeButton, 1, ev));
volumeButton.addEventListener("contextmenu", (ev) => moveVolumeSelector(volumeButton, -1, ev));

const [unknownButton, powerButton] = document.querySelectorAll(".button");

powerButton.addEventListener("click", () => screen.toggleOn());
