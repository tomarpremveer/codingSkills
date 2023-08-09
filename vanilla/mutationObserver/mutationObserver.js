class MutationObserverHere {
    constructor() {
        this.observer = null;
    }
  
}

MutationObserverHere.prototype.init = function initObserver(callback) {
  // eslint-disable-next-line
  if (callback == undefined) {
    throw new Error("Callback cannot be null.");
  }
  this.observer = new MutationObserver(callback);
  return this.observer;
};
MutationObserverHere.prototype.observe = function observer(
  target,
  config = { attributes: true, childList: true, subtree: true }
) {
  // eslint-disable-next-line
  if (target == undefined) {
    throw new Error("Target cannot be null");
  }
    this.observer.observe(target,config);
};
MutationObserverHere.prototype.removeObserver = function stopObserving() {
    this.observer.disconnect()
}

export default MutationObserverHere;
