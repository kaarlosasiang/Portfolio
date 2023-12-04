import App from "./components/App";
// import "../../node_modules/feather-icons/dist/feather.js";

const init = () => {
  App.render();
  App.handleSmoothScrolling();
  App.handleHeaderBlurEffect();
  
  // Initialize Feather Icons
  feather.replace();
};

init();
