import { Howl } from "howler";
import "./BrandTwitch.js";
import "./ChannelStreamer.js";

const SFX = {
  static: new Audio("sounds/static.mp3"),
  off: new Audio("sounds/off.mp3"),
  on: new Audio("sounds/on.mp3"),
  change: {
    play: () => {
      const n = 1 + Math.floor(Math.random() * 4);
      const audio = new Audio(`sounds/change${n}.mp3`);
      audio.play();
    }
  }
};

class RetroTVScreen extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.noise = new Howl({
      src: ["sounds/static.mp3"],
      loop: true
    });
  }

  static get styles() {
    return /* css */`
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      :host(.on) .off {
        opacity: 0;
      }

      :host(:not(.on)) .off {
        opacity: 1;
      }

      .television-screen {
        background: #302d30;
        width: 95%;
        height: 95%;
        border-radius: 30%;
        box-shadow: 0 0 5px 2px #111 inset;
        overflow: hidden;
        position: relative;
      }

      .noise {
        width: 100%;
        height: 100%;
        background:
          linear-gradient(to bottom, transparent, #aaa4, #8881, #6664, #4445, #2228, #4443, transparent),
          repeating-linear-gradient(transparent 0 2px, #25242935 2px 4px);
        animation: moveBand 8s linear infinite;
        z-index: 4;
        position: relative;
        pointer-events: none;
      }

      .channel {
        width: 100%;
        height: 100%;
        transform: scaleX(0);
        transition:
          transform 0.5s ease,
          filter 0.25s ease;
        position: absolute;
      }

      .on .channel {
        transform: scaleX(1);
        filter: brightness(1);
        transition: transform 0.5s ease 0.25s;
      }

      .current {
        transform: scaleY(0);
        transition: transform 0.5s ease;
      }

      .on .channel .current {
        transform: scaleY(1);
        transition: transform 0.25s ease 0.5s;
      }

      /*
      .television-screen:not(.on) {
        filter: brightness(500%);
      }
      */

      .off {
        width: 100%;
        height: 100%;
        background: radial-gradient(#222, #1a1a1a, #111);
        z-index: 5;
        position: absolute;
        top: 0;
        transition: opacity 0.5s ease;
        pointer-events: none;
      }

      @keyframes moveBand {
        0% { background-position-y: 0, 0; }
        100% { background-position-y: -221px, 0; }
      }
    `;
  }

  toggleOn() {
    this.classList.toggle("on");
    this.shadowRoot.querySelector(".television-screen").classList.toggle("on");
    const isTVOn = this.classList.contains("on");

    if (isTVOn) this.setNoise("on");
    else this.setNoise("off");
  }

  setNoise(action = "on") {
    if (action === "on") {
      this.noise.play();
    } else if (action === "off") {
      this.noise.pause();
    } else if (action === "silence") {
      this.noise.volume(0);
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.noise.volume(1);
      }, 250);
    }
  }

  changeChannel(channelName) {
    const channelStreamer = this.shadowRoot.querySelector("channel-streamer");
    channelStreamer.setAttribute("name", channelName);

    const isTVOn = this.classList.contains("on");
    if (isTVOn) {
      SFX.change.play();
      this.setNoise("silence");
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${RetroTVScreen.styles}</style>
    <div class="television-screen">
      <div class="off"></div>
      <div class="channel">
        <channel-streamer name="ManzDev" class="current"></channel-streamer>
      </div>
      <div class="noise"></div>
    </div>`;
  }
}

customElements.define("retro-tv-screen", RetroTVScreen);
