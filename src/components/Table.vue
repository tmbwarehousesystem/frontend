<template>
  <div>
    <v-data-table
      @click:row="rowClick"
      item-key="id"
      single-select
      v-model="selected"
      :headers="headers"
      :items="elements"
      :item-class="itemRowBackground"
      class="elevation-5 pt-4"
      mobile-breakpoint="0"
      :search="search"
      :custom-filter="filter"
    >
      <template v-slot:top>
        <v-text-field
          dense
          solo
          v-model="requests"
          label="SEARCH PEDIDOS"
          class="mx-5"
        ></v-text-field>
        <!-- <v-combobox
        class="mx-5"
        v-model="distributionSelect"
        label="Search"
        :items="distributionItems"
      ></v-combobox> -->
        <v-combobox
          solo
          dense
          class="mx-5"
          v-model="search"
          label="SEARCH TYPE"
          :items="typeItems"
        ></v-combobox>
      </template>
    </v-data-table>

    <Item v-if="selectedItem" :item="selectedItem" />
  </div>
</template>


<script>
import Item from "@/components/Item";
export default {
  components: {
    Item,
  },
  data() {
    return {
      selectedItem: {},
      distributionItems: ["MDL DISTRIBUCION LOGÍSTICA S.A."],
      typeItems: ["IN", "OUT", "TODOS", "TRF"],
      search: "",
      requests: "",
      singleSelect: true,
      selected: [],
      elements: [
        {
          id: 1,
          name: "Out",
          req: 23,
          data: 6.0,
          ped: 34,
        },
        {
          id: 2,
          name: "In",
          req: 43,
          data: 6.0,
          ped: 23,
        },
        {
          id: 3,
          name: "Out",
          req: 34,
          data: 6.0,
          ped: 24,
        },
        {
          id: 4,
          name: "Out",
          req: 1,
          data: 6.0,
          ped: 45,
        },
        {
          id: 5,
          name: "In",
          req: 23,
          data: 6.0,
          ped: 4,
        },
      ],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "Tipo",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Req. Nº", value: "req" },
        { text: "Data", value: "data" },
        {
          text: "Ped. Nº",
          value: "ped",
          filter: (value) => {
            if (!this.requests) return true;

            return value === parseInt(this.requests);
          },
        },
      ];
    },
  },
  methods: {
    rowClick: function (item, row) {
      row.select(true);
      this.selectedItem = item;
    },
    itemRowBackground: function (item) {
      return item.id & 1 ? "style-1" : "";
    },
    filter(value, search) {
      return (
        value != null &&
        search != null &&
        typeof value === "string" &&
        value
          .toString()
          .toLocaleLowerCase()
          .indexOf(search.toString().toLocaleLowerCase()) !== -1
      );
    },
  },
};
</script>

<style lang="less">
.style-1 {
  background-color: #27272714;
}
</style>
