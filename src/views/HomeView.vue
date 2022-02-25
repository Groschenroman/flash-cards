<template>
  <div class="flex justify-center">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <template v-for="card in cards" :key="card">
      <Card :card="card" />
    </template>
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
export default class HomeView extends Vue {
  public readonly cards = [
    {
      id: 1,
      question: `What is
        the difference
        between 1 and 2
      `,
      answer: `foo`,
      reissue: 0,
    },
  ];
}
</script>
