<script setup>
</script>

<template>
  <div>
    <Container>
      <Header />
    </Container>

    <Container :backgroun="{ background: 'green' }">
      <router-view />
    </Container>

    <Container>
      <Footer />
    </Container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Container from "./components/Container.vue";

export default {
  data: () => ({}),
  components: {
    Header,
    Footer,
    Container,
  },
  computed: {
    styles: () => ({
      background: "green",
    }),
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