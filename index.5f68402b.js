import{h as x}from"./vendor.40245179.js";const y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=i(n);fetch(n.href,s)}};y();class c extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
      <div class="twitch-logo-container">
        <div class="twitch-face">
          <div class="eyes">
            <div class="eye"></div>
            <div class="eye"></div>
          </div>
        </div>
      </div>
      <div class="text">twitch</div>
    `}}customElements.define("brand-twitch",c);class d extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}static get observedAttributes(){return["name"]}attributeChangedCallback(e,i,o){if(i){const n=this.shadowRoot.querySelector(".logo");n.src=`logos/${o.toLowerCase()}.png`,n.alt=o;const s=this.shadowRoot.querySelector(".text");s.textContent=o;const a=this.shadowRoot.querySelector(".channel-container");a.href=`https://twitch.tv/${o}`}}connectedCallback(){this.name=this.getAttribute("name"),this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${d.styles}</style>
      <a class="channel-container" href="https://twitch.tv/${this.name}">
        <img class="logo" src="logos/${this.name.toLowerCase()}.png" alt="${this.name}">
        <div class="text">${this.name}</div>
      </a>
    `}}customElements.define("channel-streamer",d);const w={static:new Audio("sounds/static.mp3"),off:new Audio("sounds/off.mp3"),on:new Audio("sounds/on.mp3"),change:{play:()=>{const t=1+Math.floor(Math.random()*4);new Audio(`sounds/change${t}.mp3`).play()}}};class h extends HTMLElement{constructor(){super();this.attachShadow({mode:"open"}),this.noise=new x.Howl({src:["sounds/static.mp3"],loop:!0})}static get styles(){return`
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
    `}toggleOn(){this.classList.toggle("on"),this.shadowRoot.querySelector(".television-screen").classList.toggle("on"),this.classList.contains("on")?this.setNoise("on"):this.setNoise("off")}setNoise(e="on"){e==="on"?this.noise.play():e==="off"?this.noise.pause():e==="silence"&&(this.noise.volume(0),clearTimeout(this.timer),this.timer=setTimeout(()=>{this.noise.volume(1)},250))}changeChannel(e){this.shadowRoot.querySelector("channel-streamer").setAttribute("name",e),this.classList.contains("on")&&(w.change.play(),this.setNoise("silence"))}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${h.styles}</style>
    <div class="television-screen">
      <div class="off"></div>
      <div class="channel">
        <channel-streamer name="ManzDev" class="current"></channel-streamer>
      </div>
      <div class="noise"></div>
    </div>`}}customElements.define("retro-tv-screen",h);const f=["ManzDev","S4vitaar","midudev","GoncyPozzo","DorianDesings","mouredev","fpiaggio","PabloSirera","AristiDevs","RafaLagoon","danirod_","DesarrolloUtil"],v=t=>{const e=document.createElement("link");return e.rel="preload",e.as="image",e.href=t,e};f.forEach(t=>document.head.appendChild(v(`logos/${t.toLowerCase()}.png`)));const[r,l]=document.querySelectorAll(".dial"),p=document.querySelector("retro-tv-screen"),m=(t,e)=>{const i=t.style.getPropertyValue("--value"),o=parseInt(i)+30*e;return t.style.setProperty("--value",`${o}deg`),o},u=(t,e=1,i)=>{i.preventDefault();const n=m(t,e)%360/30;p.changeChannel(f[n])},g=(t,e=1,i)=>{i.preventDefault(),m(t,e)};r.addEventListener("click",t=>u(r,1,t));r.addEventListener("contextmenu",t=>u(r,-1,t));l.addEventListener("click",t=>g(l,1,t));l.addEventListener("contextmenu",t=>g(l,-1,t));const[S,b]=document.querySelectorAll(".button");b.addEventListener("click",()=>p.toggleOn());
