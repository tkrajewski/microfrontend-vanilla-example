import isInNamespace from './isInNamespace';

export default function register (functionName, ...args) {
  try {
    isInNamespace(functionName) &&
      window.microfrontend[functionName].call(this, ...args);
    console.log(`${functionName} has been triggered.`);
  } catch (e) {
    console.error(e);
  }
};
