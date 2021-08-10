<template>
  <q-page class="q-mx-md">
    <div class="text-h6">Dashboard</div>
    <div class="row">
      <div class="col-md-3 col-sm-4 col-xs-12">
        <q-input filled dense v-model="outlet" disable>
          <template v-slot:prepend>
            <q-icon name="storefront" />
          </template>
        </q-input>
      </div>
      <div class="col-md-3 col-sm-4 col-xs-12 q-ml-md">
        <q-input outlined dense v-model="date" mask="date" :rules="['date']">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
    </div>
    <div class="text-h6">Summary</div>
    <q-separator />
    <div class="row q-my-md">
      <div style="padding: 0 4px" class="col-md-4 col-sm-6 col-xs-12">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-subtitle2 text-grey">Gross Sales</div>
            <div class="text-h6">Rp. {{ gross }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div style="padding: 0 4px" class="col-md-4 col-sm-6 col-xs-12">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-subtitle2 text-grey">Net Sales</div>
            <div class="text-h6">Rp. {{ net }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div style="padding: 0 4px" class="col-md-4 col-sm-6 col-xs-12">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-subtitle2 text-grey">Gross Profit</div>
            <div class="text-h6">Rp. {{ profit }}</div>
          </q-card-section>
        </q-card>
      </div>
      <div style="padding: 4px 4px" class="col-md-4 col-sm-6 col-xs-12">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-subtitle2 text-grey">Transaction</div>
            <div class="text-h6">Rp. {{ profit }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="text-h6">Item Summary</div>
    <q-separator />
    <q-table
      class="my-sticky-header-table q-my-md"
      title="Item"
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
          icon="archive"
          no-caps
          @click="exportTable"
        >
          <q-tooltip>Download CSV</q-tooltip>
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

<script>
import { defineComponent, onMounted, toRefs, reactive } from "vue";
import api from "../api/fetch.api.js";
import { exportFile } from "quasar";

export default defineComponent({
  name: "PageDashboard",
  setup() {
    let charts = [];
    const state = reactive({
      outlet: "Outlet 1",
      date: "2019/02/01",
      gross: 0,
      net: 0,
      profit: 0,
      build: [],
      filter: "",
    });

    onMounted(async () => {
      console.log("dashboard!");
    });

    const exportTable = () => {};

    const columns = [
      {
        name: "name",
        required: true,
        label: "Dessert (100g serving)",
        align: "left",
        field: (row) => row.name,
        format: (val) => `${val}`,
        sortable: true,
      },
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
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
      },
      {
        name: "iron",
        label: "Iron (%)",
        field: "iron",
        sortable: true,
        sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
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
      {
        name: "Eclair",
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        sodium: 337,
        calcium: "6%",
        iron: "7%",
      },
      {
        name: "Cupcake",
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        sodium: 413,
        calcium: "3%",
        iron: "8%",
      },
      {
        name: "Gingerbread",
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        sodium: 327,
        calcium: "7%",
        iron: "16%",
      },
      {
        name: "Jelly bean",
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        sodium: 50,
        calcium: "0%",
        iron: "0%",
      },
      {
        name: "Lollipop",
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        sodium: 38,
        calcium: "0%",
        iron: "2%",
      },
      {
        name: "Honeycomb",
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        sodium: 562,
        calcium: "0%",
        iron: "45%",
      },
      {
        name: "Donut",
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        sodium: 326,
        calcium: "2%",
        iron: "22%",
      },
      {
        name: "KitKat",
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        sodium: 54,
        calcium: "12%",
        iron: "6%",
      },
    ];

    return {
      ...toRefs(state),
      exportTable,
      columns,
      rows,
    };
  },
});
</script>

<style lang="scss" scoped>
.my-sticky-header-table {
  height: 50vh;

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th {
    background-color: #c1f4cd;
  }

  thead tr th {
    position: sticky;
    z-index: 1;
  }
  thead tr:first-child th {
    top: 0;
  }

  &.q-table--loading thead tr:last-child th {
    top: 48px;
  }
}
</style>