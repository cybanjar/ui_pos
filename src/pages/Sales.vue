<template>
  <q-page class="row items-center justify-evenly">
    <h1>Sales page</h1>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs, reactive } from 'vue';

export default defineComponent({
  name: 'PageSales',
  setup() {
    const state = reactive({
    });

    onMounted(async () => {
      console.log('mounted!');
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
