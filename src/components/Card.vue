<template>
  <article class="flex flex-col justify-between p-4 bg-yellow-200">
    <header>Card</header>
    <main>{{ msg }}</main>
    <footer>footer</footer>
  </article>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class Card extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
