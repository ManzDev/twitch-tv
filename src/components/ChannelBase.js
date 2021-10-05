class ChannelS4vitaar extends HTMLElement {
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
    <style>${ChannelS4vitaar.styles}</style>
      <div class="twitch-logo-container">

      </div>
      <div class="text">s4vitaar</div>
    `;
  }
}

customElements.define("channel-s4vitaar", ChannelS4vitaar);
