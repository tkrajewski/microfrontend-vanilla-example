export default function isNamespaceFunction (functionName) {
  if (typeof window?.microfrontend[functionName] !== 'function')
    throw Error(`The ${functionName} function is not in the namespace scope`);
  return true;
};
