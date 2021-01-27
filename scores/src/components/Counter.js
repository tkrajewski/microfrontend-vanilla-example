export default {
  elementID: 'scoresCounter',
  predefinedText: 'Scores: ',
  create: function(container, initValue) {
    const scoresCounter = document.createElement('div');
    scoresCounter.setAttribute('id', this.elementID);
    scoresCounter.innerHTML = `${this.predefinedText}${initValue}`;
    container.appendChild(scoresCounter);
  },
  update: function(newValue) {
    const counterElement = document.getElementById(this.elementID);
    scoresCounter.innerHTML = `${this.predefinedText}${newValue}`;
  }
};
