<template>
  <footer class="footer">
    <ul class="footer__list-links">
      <ul v-bind:key="listOfLinks" v-for="listOfLinks in listsOfLinks">
        <li v-bind:key="link" v-for="link in listOfLinks">
          <router-link
            :class="checkActiveLink(link)"
            :to="link"
            v-on:click="choiceLink(link)"
            >{{ link }}</router-link
          >
        </li>
      </ul>
    </ul>
  </footer>
</template>


<script>
export default {
  data: () => ({
    listsOfLinks: {
      first: ["first", "second", "third"],
      second: ["fourth", "fifth", "sixth"],
      third: ["seventh", "eighth", "ninth"],
    },
    targetLink: "",
  }),
  computed: {},
  methods: {
    choiceLink(link) {
      this.targetLink = link;
    },
    checkActiveLink(link) {
      return this.targetLink === link ? "active" : "";
    },
  },
};
</script>


<style lang="scss" scoped>
.footer {
  background: blue;
  padding: 15px 15px 30px 15px;

  > ul {
    display: flex;
    justify-content: space-between;

    li {
      margin: 5px 0;
    }

    a {
      display: block;
      color: white;
      text-decoration: none;
      text-align: center;
      padding: 7px 10px;
      border: 1px solid rgba(0, 0, 0, 0);
      border-radius: 5px;

      &:hover {
        border: 1px solid black;
        border-radius: 5px;
      }
    }

    .active {
      background: green;
    }
  }
}
</style>