class RetroTV extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {

      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${RetroTV.styles}</style>
    <div>
    </div>`;
  }
}

customElements.define("retro-tv", RetroTV);
