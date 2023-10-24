// @ts-check

import { ref, onMounted as vueOnMounted, computed as vueComputed } from "vue";

/**
 * @type import('vue').ComponentOptions
 */
export const options = {
  setup() {
    const count = ref(0);

    /** @type {import('vue').Ref<HTMLParagraphElement | null>} */
    const valueElement = ref(null);

    function increment() {
      count.value++;
    }

    function decrement() {
      count.value--;
    }

    const numberStyle = vueComputed(() => {
      return count.value > 0
        ? {
            color: `hsl(${count.value * Math.random() * 100}deg, 80%, 50%)`,
          }
        : {
            color: "inherit",
          };
    });

    return {
      count,
      increment,
      decrement,
      numberStyle,
      valueElement,
      onMounted: vueOnMounted(() => {
        console.log("onMounted", {
          valueElement: valueElement.value,
        });
      }),
    };
  },
};
