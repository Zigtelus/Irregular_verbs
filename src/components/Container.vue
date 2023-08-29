<template>
  <section class="container" :style="backgroun" :onclick="plusNumber">
    {{ number }}
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    backgroun: String,
  },
  data: () => ({
    number: 0,
    color: "green",
    colors: ["green", "black", "blue", "yellow"],
  }),
  methods: {
    plusNumber() {
      this.number += 1;
    },
  },
  computed: {
    cssVars: () => ({
      background: color,
    }),
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  padding: 40px;
}
</style>