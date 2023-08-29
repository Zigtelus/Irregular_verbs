<template>
  <header>
    <div class="logo"><LogoSVG /></div>
    <ul>
      <li v-bind:key="key" v-for="(link, key) in links">
        <router-link :to="link">{{ key }}</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
import LogoSVG from "../assets/logo.vue";

export default {
  data: () => ({
    links: {
      home: "/",
      chat: "/chat",
      blog: "/blog",
    },
  }),
  components: { LogoSVG },
};
</script>


<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    width: 50px;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ul {
    width: 30%;
    display: flex;
    justify-content: space-between;
  }
}
</style>