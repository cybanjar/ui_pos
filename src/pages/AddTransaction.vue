<template>
  <q-page class="q-pa-md">
    <div class="text-h6">Add Transaction</div>
    <q-separator class="q-my-md" />
    <div class="row">
      <div class="col-md-4 col-sm-6 col-xs-12">
        <q-card class="" flat bordered>
          <q-card-section>
            <div class="text-subtitle2 text-grey">Total</div>
            <div class="text-h6">Rp. {{ total }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs, reactive } from "vue";

export default defineComponent({
  name: "PageAddTransaction",
  setup() {
    const state = reactive({
      outlet: "",
      date: "2019/02/01",
      total: 0,
    });

    onMounted(async () => {
      console.log("mounted!");
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
