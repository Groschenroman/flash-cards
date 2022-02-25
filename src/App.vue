<template>
  <nav class="w-full flex justify-center">
    <ul class="w-full max-w-6xl flex justify-center">
      <li class="px-4">
        <router-link to="/">Home</router-link>
      </li>
      <li class="px-4">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
