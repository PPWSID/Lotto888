<template>
  <div>
    <v-btn
      v-show="showScrollTop && $vuetify.breakpoint.smAndDown"
      class="scroll-btn scroll-btn-top"
      icon
      :color="btnColor"
      @click="scrollToTop"
    >
      <v-icon>mdi-arrow-up</v-icon>
    </v-btn>
    <v-btn
      v-show="showScrollBottom && $vuetify.breakpoint.smAndDown"
      class="scroll-btn scroll-btn-bottom"
      icon
      :color="btnColor"
      @click="scrollToBottom"
    >
      <v-icon>mdi-arrow-down</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    btnColor: {
      type: String,
      default: "primary",
    },
  },
  data() {
    return {
      showScrollTop: false,
      showScrollBottom: true,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    scrollToBottom() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    },
    handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      this.showScrollTop =
        scrollPosition + windowHeight >= documentHeight - 100;
      this.showScrollBottom = scrollPosition <= 100;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.scroll-btn {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  background-color: white;
}

.scroll-btn-top {
  top: 20px;
}

.scroll-btn-bottom {
  bottom: 20px;
}
</style>