function createSettimeout() {
  let timerId = 0;
  let timerMap = {};

  function setTimeoutPolyfill(callback, delay) {
    let id = timerId++;
    let start = Date.now();
    timerMap[id] = true;

    function executeCallback() {
      if (!timerMap[id]) return;
      if (start + delay < Date.now()) {
        callback();
      } else {
        requestIdleCallback(executeCallback);
      }
    }
    requestIdleCallback(executeCallback);
    return id;
  }
  return {
    setTimeoutPolyfill
  };
}

const { setTimeoutPolyfill } = createSettimeout();

console.log("console A");
setTimeoutPolyfill(() => {
  console.log("console BB");
}, 1000);
console.log("console C");
