<template>
  <div class="home">
    <h1>CoronaVirus Cases By Country</h1>
    <LmaoNinjaTable :records="records" />
  </div>
</template>

<script>
// @ is an alias to /src
import LmaoNinjaTable from "@/components/LmaoNinjaTable.vue";

export default {
  name: "Home",
  data() {
    return {
      records: []
    };
  },
  components: {
    LmaoNinjaTable
  },
  async mounted() {
    this.records = await this.$get(
      // "//138.197.194.173/api/Dimension"
      "https://corona.lmao.ninja/countries",
      // "https://coronavirus.m.pipedream.net/"
      // "//apps.who.int/gho/athena/api/GHO?format=json"
    );
  }
};
</script>
