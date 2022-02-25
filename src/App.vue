<template>
  <div id="site">
    <header class="bg-slate-200 flex justify-center items-center">
      <nav class="w-full max-w-screen-xl">
        <ul class="w-full flex justify-center items-center">
          <li class="px-4">
            <router-link to="/">Home</router-link>
          </li>
          <li class="px-4">
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="bg-slate-300 flex items-center justify-center p-4">
      <router-view />
    </main>
    <footer
      class="bg-slate-400 text-slate-200 flex justify-center items-center"
    >
      Footer
    </footer>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

#site {
  display: grid;
  grid-template-rows: 10vh 85vh 5vh;
}
</style>
