<template>
  <v-container>
    <!-- <GoBack /> -->
    <GoHome />

    <section class="destinations">
      <Requisitions v-if="menuItem.name === 'Requisições'"  :name="menuItem.name.toUpperCase()"/>
      <Transfers v-if="menuItem.name === 'Transferências'" :name="menuItem.name.toUpperCase()"/>
    </section>
  </v-container>
</template>
<script>
import store from "@/store";
// import GoBack from "@/components/GoBack";
import GoHome from "@/components/GoHome";
import Requisitions from "./Pda/PdaRequisitions";
import Transfers from "./Pda/PdaTransfers";
export default {
  components: {
    // GoBack,
    GoHome,
    Requisitions,
    Transfers
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    menuItem() {
      return store.options.find(
        (menuItem) => menuItem.slug === this.slug
      );
    },
  },
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.experiences {
  padding: 40px 0;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.cards {
  display: flex;
  justify-content: space-between;
}
.cards img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>
