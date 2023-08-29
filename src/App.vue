<script setup>
</script>

<template>
  <div>
    <Container>
      <div>11</div>
    </Container>

    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Container from "./components/Container.vue";

export default {
  components: {
    Header,
    Footer,
    Container,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

ul {
  margin: 0;
  padding: 0;

  li {
    list-style-type: none;
  }
}

a {
  text-decoration: none;
  color: black;
}
</style>
