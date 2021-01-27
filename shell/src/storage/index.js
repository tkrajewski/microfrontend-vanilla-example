class Storage {
  constructor(){
    if(!Storage.instance) {
      this._eventName = 'storageUpdate';
      this._data = {
        scores: 0,
      };      

      Storage.instance = this;
    }

    return Storage.instance;
  }

  incrementScores(value) {
    this._data.scores = this._data.scores + value;

    document.dispatchEvent(new Event(this._eventName));
  }

  subscribe(callbackFunction) {
    if (typeof callbackFunction === 'function') {
      const self = this;

      document.addEventListener(this._eventName, function() {
        callbackFunction(self._data);
      });
    }
  }
}

const storageInstance = new Storage();
Object.freeze(storageInstance);

export default storageInstance;