// @ts-check

/**
 * @typedef {{
 *  selector: string;
 *  callback: IntersectionObserverCallback;
 * }} Options
 */

/**
 * @param {Options & IntersectionObserverInit} options
 * @returns {IntersectionObserver}
 */
export function start(options) {
  const { selector, callback, ...intersectionObserverInit } = options;
  const targets = document.querySelectorAll(selector);
  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: "0px",
    threshold: 0,
    ...intersectionObserverInit,
  });

  for (const target of targets) {
    observer.observe(target);
  }

  return observer;
}
