const debounce = (fn, wait, callFirst) => {
  let timeout;
  return () => {
    if (!wait) {
      return fn.apply(this, arguments);
    }
    const context = this;
    const args = arguments;
    const callNow = callFirst && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!callNow) {
        return fn.apply(context, args);
      }
    }, wait);

    if (callNow) {
      return fn.apply(this, arguments);
    }
  };
}

const abc = () => {
  console.log("hi");
};

const debouncedAbc = debounce(abc, 199, true);
debouncedAbc();
setTimeout(debouncedAbc, 200);
setTimeout(debouncedAbc, 400);
setTimeout(debouncedAbc, 600);
setTimeout(debouncedAbc, 800);
setTimeout(debouncedAbc, 1000);
setTimeout(debouncedAbc, 1200);
setTimeout(debouncedAbc, 1400);