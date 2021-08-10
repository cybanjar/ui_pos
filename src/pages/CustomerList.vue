<template>
  <q-page class="q-mx-md">
    <q-table
      class="my-sticky-header-table q-my-md"
      title="Customer List"
      :rows="rows"
      :columns="columns"
      :filter="filter"
      no-data-label="No data"
      row-key="name"
      flat
      bordered
    >
      <template v-slot:top-right>
        <q-btn
          flat
          round
          class="q-mr-md"
          color="primary"
          icon="add_circle"
          no-caps
        >
          <q-tooltip>Create Customer</q-tooltip>
        </q-btn>
        <q-input dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon color="primary" name="search" />
          </template>
        </q-input>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs, reactive } from 'vue';

export default defineComponent({
  name: 'PageCustomerList',
  setup() {
    const state = reactive({
      filter: ''
    });

    onMounted(async () => {
      console.log('mounted!');
    });

    const columns = [
      {
        name: "name",
        required: true,
        label: "Dessert (100g serving)",
        align: "left",
        sortable: true,
      },
      // { name: "name", label: "Dessert (100g serving)", align: "left" field: "fat", sortable: true },
      {
        name: "calories",
        align: "center",
        label: "Calories",
        field: "calories",
        sortable: true,
      },
      { name: "fat", label: "Fat (g)", field: "fat", sortable: true },
      { name: "carbs", label: "Carbs (g)", field: "carbs" },
      { name: "protein", label: "Protein (g)", field: "protein" },
      { name: "sodium", label: "Sodium (mg)", field: "sodium" },
      {
        name: "calcium",
        label: "Calcium (%)",
        field: "calcium",
        sortable: true,
      },
      {
        name: "iron",
        label: "Iron (%)",
        field: "iron",
        sortable: true,
      },
    ];

    const rows = [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: "14%",
        iron: "1%",
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        sodium: 129,
        calcium: "8%",
        iron: "1%",
      },
    ];

    return {
      ...toRefs(state),
      columns,
      rows,
    };
  },
});
</script>
