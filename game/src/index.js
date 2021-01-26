import './namespace';
import './main.css';

window.microfrontend.registerGame = function(source) {
  console.log(`GAME ${source}`);
}

window.onload = function() {
  if (document.getElementById('rootGame')) {
    registerGame('internal');
  }
}