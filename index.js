function MainComponent() {
  let newElement = document.createElement("div");
  newElement.innerHTML = `
    <style>
      #main-component {
        margin: 10px;
        padding: 0;
        height: 75vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    </style>
    <div id="main-component">
      Hello World!
      <button id="toggle-button">
        Click Me
      </button>
    </div>
  `;

  return newElement;
}

function App() {
  let el = document.getElementById("root");
  el.attachShadow({ mode: "open" });
  // Just like prototype & constructor bi-directional references, we have...
  el.shadowRoot; // the shadow root.
  el.shadowRoot.host; // the element itself.

  // put something in shadow DOM
  el.shadowRoot.innerHTML = "Shadowed element here";

  function toggleText() {
    el.shadowRoot.querySelector("#main-component").style.backgroundColor =
      "pink";
    console.log("--------Clicked");
  }

  // Like any other normal DOM operation.
  el.shadowRoot.appendChild(MainComponent());
  el.shadowRoot
    .querySelector("#toggle-button")
    .addEventListener("click", toggleText);
}

App();
