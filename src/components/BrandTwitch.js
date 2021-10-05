class BrandTwitch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .twitch-logo-container {
        width: 65px;
        height: 65px;
        background: #9244FF;
        display: grid;
        place-items: center;
        clip-path: polygon(7% 18%, 26% 0%, 93% 0%, 93% 50%, 61% 82%, 47% 82%, 29% 100%, 29% 82%, 7% 82%);
      }

      .twitch-face {
        width: 100%;
        height: 100%;
        background: white;
        display: grid;
        place-items: center;
        clip-path: polygon(29% 8%, 86% 8%, 86% 46%, 72% 61%, 57% 61%, 44% 74%, 44% 61%, 28% 61%);
      }

      .eyes {
        width: 28%;
        height: 28%;
        display: flex;
        justify-content: space-between;
        transform: translate(35%, -60%);
      }

      .eye {
        width: 28%;
        height: 72%;
        background: #9244FF;
      }

      .text {
        font-family: "Twitchy.TV", sans-serif;
        font-size: 32px;
        color: white;
        letter-spacing: -1px;
        transform: translate(7px, -18px);
        text-shadow: 0 0 10px #7038C4;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BrandTwitch.styles}</style>
      <div class="twitch-logo-container">
        <div class="twitch-face">
          <div class="eyes">
            <div class="eye"></div>
            <div class="eye"></div>
          </div>
        </div>
      </div>
      <div class="text">twitch</div>
    `;
  }
}

customElements.define("brand-twitch", BrandTwitch);
