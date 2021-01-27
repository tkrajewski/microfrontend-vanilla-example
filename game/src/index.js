import './namespace';
import './main.css';

window.microfrontend.registerGame = function(storage) {
  const appElement = document.getElementById('gameApp');

  if (appElement) {
    const actionButton = document.createElement('button');
    actionButton.innerHTML = 'Increment Score';
    actionButton.onclick = function() {
      storage.incrementScores(1);
    }
    appElement.appendChild(actionButton);
  }
}

window.onload = function() {
  if (document.getElementById('rootGame')) {
    registerGame('internal');
  }
}