<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated>
      <q-toolbar class="bg-white">
        <q-btn
          flat
          dense
          round
          color="primary"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-primary"
    >
      <q-list>
        <q-item-label header class="text-grey-1 text-h6 text-center">
          Systems
        </q-item-label>
        <q-separator />
        <div class="q-pa-md">
          <q-btn-dropdown flat color="grey-4" class="q-pl-lg" label="Cybanjar">
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>
                <div class="">Cybanjar Komputer</div>
                <div class="text-grey">cybanjar@gmail.com</div>
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <q-img src="https://cybanjar.github.io/syamsulamin/assets/img/amin.jpg" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">Syamsul Amin</div>

                <q-btn
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                />
              </div>
            </div>
          </q-btn-dropdown>
          <q-tree
            class="text-grey-4"
            :nodes="simple"
            node-key="label"
            no-connectors
            text-color="grey-4"
            v-model:expanded="expanded"
            v-model:selected="selected"
            @click="onRowClick"
          />
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Transaction",
    caption: "Create, read, update transaction",
    icon: "school",
    to: "/transaction",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    to: "/dashboard",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

import { defineComponent, ref, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const router = useRouter();
    const route = useRoute();

    const state = reactive({
      expanded: ref(["REPORT", "LIBRARY", "CUSTOMERS"]),
      simple: [
        {
          label: "DASHBOARD",
          to: "dashboard",
        },
        {
          label: "REPORT",
          children: [
            { label: "AddTransaction" },
            { label: "Sales" },
            { label: "Transaction", to: "transaction" },
            { label: "Invoice" },
            { label: "Shift" },
          ],
        },
        {
          label: "LIBRARY",
          children: [
            { label: "Products" },
            { label: "Modifiers" },
            { label: "Categories" },
            { label: "Promo" },
            { label: "Discounts" },
            { label: "Taxes" },
            { label: "Gratuity" },
            { label: "Sales Type" },
            { label: "Brands" },
          ],
        },
        {
          label: "INVENTORY",
          children: [
            { label: "Summary" },
            { label: "Supliers" },
            { label: "Purchase Order" },
            { label: "Transfer" },
            { label: "Adjustment" },
          ],
        },
        {
          label: "CUSTOMERS",
          children: [
            { label: "CustomersList" },
            { label: "Feedback" },
            { label: "Loyalty Program" },
          ],
        },
        {
          label: "EMPLOYEES",
          children: [
            { label: "Employee Slots" },
            { label: "Employee Access" },
            { label: "PIN Access" },
          ],
        },
        {
          label: "ACCOUNT SETTINGS",
          children: [
            { label: "Account" },
            { label: "Billing" },
            { label: "Outlets" },
            { label: "Bank Account" },
            { label: "Public Profile" },
            { label: "Receipt" },
          ],
        },
      ],
      mobileData: false,
    });

    const leftDrawerOpen = ref(false);
    const selected = ref(null);

    const onRowClick = (dataRow: any) => {
      router.push({
        path: dataRow.target.innerText.trim().toLowerCase(),
      });
    };

    return {
      ...toRefs(state),
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      selected,
      onRowClick,
    };
  },
});
</script>
