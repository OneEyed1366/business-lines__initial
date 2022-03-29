<script lang="ts">
import Vue from 'vue';
import { BFormInput } from 'bootstrap-vue';

export default Vue.extend({
  name: 'SearchAtom',
  props: {
    placeholder: {
      type: String,
      required: false,
    },
    onChange: {
      type: Function,
      required: true,
    },
  },
  components: {
    BFormInput,
  },
});
</script>

<template>
  <BFormInput @input="onChange($event)" :placeholder="placeholder" />
</template>

<style lang="scss" scoped></style>
