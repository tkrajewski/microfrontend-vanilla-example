import 'game/game.js';
import 'scores/scores.js';

import './main.css';

window.onload = () => {
  if (typeof window?.microfrontend?.registerGame === 'function') {
    window.microfrontend.registerGame('shell app');
  }
};
