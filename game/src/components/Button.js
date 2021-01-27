export default {
  elementID: 'scoresCounter',
  predefinedText: 'Scores: ',
  create: function(container, onclickCallback) {
    const actionButton = document.createElement('button');
    actionButton.innerHTML = 'Increment Score';
    actionButton.onclick = function() {
      if (typeof onclickCallback === 'function') {
        onclickCallback();
      }
    }
    container.appendChild(actionButton);
  }
};
