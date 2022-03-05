const template = document.createElement("template");
template.innerHTML = `
  <style>
    p {
      font-family: serif;
    }
  </style>
  <div class="custom-component">
    <p></p>
  </div>
`;

class Component extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("p").innerText = this.getAttribute("text");
  }
}

window.customElements.define("custom-component", Component);
