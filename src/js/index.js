import App from "./components/App";

feather.replace();

const init = () => {
  feather.replace();
  App.render();
  App.handleSmoothScrolling();
  App.handleHeaderBlurEffect();
  // Initialize Feather Icons
};

init();
