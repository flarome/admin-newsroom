/**
 * Set a timeout and return a cancel function.
 * @param {() => void} callback
 * @param {number} duration
 * @returns {() => void}
 */
export function timeout(callback, duration) {
  const id = setTimeout(callback, duration);
  return () => clearTimeout(id);
}

/**
 * Throttle a function so it's called at most once per `limit` ms.
 * @template {(...args: any[]) => any} T
 * @param {T} func
 * @param {number} limit
 * @returns {(...args: Parameters<T>) => void}
 */
export function throttle(func, limit) {
  const time = () => performance.now();
  let cancel;
  let lastRan = 0;

  return function (...args) {
    const now = time();
    const context = this;

    if (now - lastRan >= limit) {
      func.apply(context, args);
      lastRan = now;
    } else {
      cancel?.();
      cancel = timeout(() => {
        func.apply(context, args);
        lastRan = time();
      }, limit - (now - lastRan));
    }
  };
}