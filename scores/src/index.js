import './namespace';
import './main.css';

window.microfrontend.registerScores = function(storage) {
  const appElement = document.getElementById('scoresApp');

  console.log('appElement', appElement);

  if (appElement) {
    const scoresCounter = document.createElement('div');
    scoresCounter.setAttribute('id', 'scoresCounter');
    scoresCounter.innerHTML = `Scores: 0`;
    appElement.appendChild(scoresCounter);

    storage.subscribe(function (storageData) {
      console.log('storageData', storageData)

      const counterElement = document.getElementById('scoresCounter');
      scoresCounter.innerHTML = `Scores ${storageData.scores}`;
    });
  }
}

window.onload = function() {
  if (document.getElementById('rootScores')) {
    registerScores();
  }
}