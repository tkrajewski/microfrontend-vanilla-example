import HTMLButton from './components/Button';
import './namespace';
import './main.css';

window.microfrontend.registerGame = function(containerID, storage) {
  const appElement = document.getElementById(containerID);

  if (appElement) {
    HTMLButton.create(appElement, function() {
      storage.incrementScores(1);
    });
  }
}

window.onload = function() {
  if (document.getElementById('rootGame')) {
    window.microfrontend.registerGame('rootGame', {
      incrementScores: function(value) {
        console.log('INC SCORES', value);
      }
    });
  }
}