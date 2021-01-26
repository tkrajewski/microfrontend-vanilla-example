import './namespace';
import './main.css';

window.microfrontend.registerScores = function(source) {
  console.log(`GAME ${source}`);
}

window.onload = function() {
  if (document.getElementById('rootScores')) {
    registerGame('internal');
  }
}