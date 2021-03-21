<template>
  <div>
    <Table :headers="headers"/>
  </div>
</template>
<script>
import Table from '@/components/Table';
export default {
  components: {
    Table
  },
  data() {
    return {
      headers: [
        {
          text: "Tipo",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Req. Nº", value: "requisitionNumber" },
        { text: "Data", value: "data" },
        {
          text: "Ped. Nº",
          value: "requestNumber",
          filter: (value) => {
            if (!this.requests) return true;

            return value === parseInt(this.requests);
          },
        },
      ]
    };
  },
  props: {},
};
</script>

<style scoped>
</style>
