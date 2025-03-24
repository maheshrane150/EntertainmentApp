// Debounce function to limit the number of times a function is called
export default function debounce(func, wait = 500) {
  let timeout;
  return function (...args) {
    const context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      timeout = null;
      func.apply(context, args);
    }, wait);
  };
}
