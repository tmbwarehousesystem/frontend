<template>
  <v-container class="innerContainer">
    <h1 class="mb-2">{{ name }}</h1>
    <Table :headers="headers" />
  </v-container>
</template>
<script>
import Table from "@/components/Table";
export default {
  components: {
    Table
  },
  props: {
    name: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      headers: [
        {
          text: "Tipo",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Req. Nº", value: "requisitionNumber" },
        { text: "Data", value: "data" },
        {
          text: "Ped. Nº",
          value: "requestNumber",
          filter: value => {
            if (!this.requests) return true;

            return value === parseInt(this.requests);
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
