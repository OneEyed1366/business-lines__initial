<script lang="ts">
import Vue from 'vue';
import HomePage from '@/ui/pages/HomePage.vue';
import { BContainer } from 'bootstrap-vue';

export default Vue.extend({
  name: 'App',
  components: {
    HomePage,
    BContainer,
  },
});
</script>

<template>
  <BContainer>
    <HomePage />
  </BContainer>
</template>

<style lang="scss"></style>
