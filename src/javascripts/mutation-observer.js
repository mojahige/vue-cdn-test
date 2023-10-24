// @ts-check

/**
 * @typedef {{
 *  root?: Node;
 *  callback: MutationCallback;
 * }} Options
 */

/**
 * @param {Options & MutationObserverInit} options
 * @returns {MutationObserver}
 */
export function start(options) {
  const { root, callback, ...mutationObserverInit } = options;
  const observer = new MutationObserver(callback);

  observer.observe(root ?? document, {
    childList: true,
    ...mutationObserverInit,
  });

  return observer;
}
