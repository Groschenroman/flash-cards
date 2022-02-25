<template>
  <div class="flex justify-center">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <Card msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "@/components/Card.vue"; // @ is an alias to /src

@Options({
  components: {
    Card,
  },
})
export default class HomeView extends Vue {}
</script>
