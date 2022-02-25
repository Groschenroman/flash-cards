<template>
  <article
    class="flex flex-col justify-between p-4 bg-yellow-200 rounded-sm shadow-md w-[50vmin] h-[50vmin]"
  >
    <header>Card {{ card.id }}</header>
    <main>
      {{ card?.question }}<br />
      {{ card?.answer }}
    </main>
    <footer>footer</footer>
  </article>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    card: Object,
  },
})
export default class Card extends Vue {
  card!: any;
}
</script>
