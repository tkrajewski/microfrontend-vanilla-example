import HTMLCounter from './components/Counter';
import './namespace';
import './main.css';

window.microfrontend.registerScores = function(containerID, storage) {
  const appElement = document.getElementById(containerID);

  if (appElement) {
    HTMLCounter.create(appElement, 0);

    storage.subscribe(function ({ scores }) {
      HTMLCounter.update(scores);
    });
  }
}

window.onload = function() {
  window.microfrontend.registerScores('rootScores', {
    subscribe: function(callbackFunction) {
      callbackFunction({ scores: 1 });
    }
  });
}