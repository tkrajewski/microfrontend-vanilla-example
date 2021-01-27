import 'game/dist/game.js';
import 'scores/dist/scores.js';

import storage from './storage';
import register from './utils/register';

import './main.css';

window.onload = () => {
  register('registerGame', storage);
  register('registerScores', storage);  
};
