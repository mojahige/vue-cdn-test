// @ts-check

import { createApp } from "vue";

/**
 *
 * @param {HTMLElement} target
 * @returns {Promise<void>}
 */
export async function mount(target) {
  const source = target.dataset.autoLoadUrl;
  const loaded = target.dataset.autoLoaded === "true";

  if (loaded) {
    return;
  }

  if (!source) {
    console.error('"data-auto-load-path" attribute is not defined.', {
      element: target,
    });

    return;
  }

  const result = await import(source).catch((error) => {
    console.error(error);

    return undefined;
  });

  if (!result) {
    return;
  }

  const { options } = result;

  if (options) {
    createApp(options).mount(target);
    target.dataset.autoLoaded = "true";
  }
}
