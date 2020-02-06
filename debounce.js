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

const debouncedAbc = debounce(abc, 2000, true);
setTimeout(debouncedAbc, 200);
setTimeout(debouncedAbc, 2000);
setTimeout(debouncedAbc, 4000);
setTimeout(debouncedAbc, 6000);
setTimeout(debouncedAbc, 8000);