class ChannelYoutube extends HTMLElement {
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

      .logo {
        background: #f34b59;
        width: 45px;
        height: 32px;
        border-radius: 8px;
        margin-right: 5px;
        display: grid;
        place-items: center;
      }

      .play {
        width: 15px;
        height: 15px;
        background: #fff;
        clip-path: polygon(0 0, 100% 50%, 0 100%);
      }

      .text {
        font-family: "Heading Pro", sans-serif;
        font-size: 42px;
        color: white;
        letter-spacing: -1px;
      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${ChannelYoutube.styles}</style>
      <div class="logo">
        <div class="play"></div>
      </div>
      <div class="text">YouTube</div>
    `;
  }
}

customElements.define("channel-youtube", ChannelYoutube);
