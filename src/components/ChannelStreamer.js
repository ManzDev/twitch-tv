class ChannelStreamer extends HTMLElement {
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

      .channel-container {
        display: flex;
        align-items: center;
        text-decoration: none;
      }

      .logo {
        width: 75px;
      }

      .text {
        color: white;
      }

      :host([name="S4vitaar"]) .text {
        font-family: "Bad Signal", sans-serif;
        font-size: 32px;
        text-shadow: 0 0 10px #E44251;
      }

      :host([name="midudev"]) .text {
        font-family: "Montserrat", sans-serif;
        font-size: 32px;
        text-shadow: 0 0 10px #199AFC;
        font-weight: bold;
      }

      :host([name="ManzDev"]) .text {
        font-family: "Bebas Neue", sans-serif;
        font-size: 42px;
        text-shadow: 0 0 10px #d54bfd;
        align-self: flex-end;
      }

      :host([name="GoncyPozzo"]) .text {
        font-family: "Montserrat", sans-serif;
        font-size: 26px;
        text-shadow: 0 0 10px #199AFC;
        font-weight: bold;
      }

      :host([name="DorianDesings"]) .text {
        font-family: "Montserrat", sans-serif;
        font-size: 23px;
        text-shadow: 0 0 10px #AA425C;
        font-weight: bold;
      }

      :host([name="mouredev"]) .text {
        font-family: "Comfortaa", sans-serif;
        font-size: 28px;
        text-shadow: 0 0 10px #23658D;
      }

      :host([name="fpiaggio"]) .text {
        font-family: "Montserrat", sans-serif;
        font-size: 28px;
        text-shadow: 0 0 10px #000;
        padding-left: 5px;
        font-weight: bold;
      }

      :host([name="AristiDevs"]) .text {
        font-family: "Montserrat", sans-serif;
        font-size: 28px;
        text-shadow: 0 0 10px #000;
        padding-left: 5px;
        font-weight: bold;
      }

      :host([name="PabloSirera"]) .text {
        font-family: "Montserrat", sans-serif;
        font-size: 28px;
        text-shadow: 0 0 10px #000;
        padding-left: 5px;
        font-weight: bold;
      }

      :host([name="RafaLagoon"]) .text {
        font-family: "Montserrat", sans-serif;
        font-size: 28px;
        text-shadow: 0 0 10px #000;
        padding-left: 5px;
        font-weight: bold;
      }

      :host([name="danirod_"]) .text {
        font-family: "Montserrat", sans-serif;
        font-size: 28px;
        text-shadow: 0 0 10px #000;
        padding-left: 5px;
        font-weight: bold;
      }

      :host([name="DesarrolloUtil"]) .text {
        font-family: "Montserrat", sans-serif;
        font-size: 22px;
        text-shadow: 0 0 10px #000;
        padding-left: 5px;
        font-weight: bold;
      }
    `;
  }

  static get observedAttributes() {
    return ["name"];
  }

  attributeChangedCallback(name, old, now) {
    if (old) {
      const image = this.shadowRoot.querySelector(".logo");
      image.src = `logos/${now.toLowerCase()}.png`;
      image.alt = now;
      const text = this.shadowRoot.querySelector(".text");
      text.textContent = now;
      const link = this.shadowRoot.querySelector(".channel-container");
      link.href = `https://twitch.tv/${now}`;
    }
  }

  connectedCallback() {
    this.name = this.getAttribute("name");
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ChannelStreamer.styles}</style>
      <a class="channel-container" href="https://twitch.tv/${this.name}">
        <img class="logo" src="logos/${this.name.toLowerCase()}.png" alt="${this.name}">
        <div class="text">${this.name}</div>
      </a>
    `;
  }
}

customElements.define("channel-streamer", ChannelStreamer);
