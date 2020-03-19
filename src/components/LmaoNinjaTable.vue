<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-row align="center" justify="center">
          <v-data-table
            :headers="headers"
            :items="records"
            :itemsPerPage="records.length"
            :sort-by="['deaths']"
            :sort-desc="[true]"
            class="elevation-1"
            hide-default-footer
          ></v-data-table>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {},
        {
          text: "Country",
          align: "start",
          sortable: true,
          value: "country"
        },
        {
          text: "Cases",
          value: "cases"
        },
        {
          text: "Today's Cases",
          value: "todayCases"
        },
        {
          text: "Deaths",
          value: "deaths"
        },
        {
          text: "Today's Deaths",
          value: "todayDeaths"
        },
        {
          text: "Recoveries",
          value: "recovered"
        },
        {
          text: "Active Cases",
          value: "active"
        },
        {
          text: "Critical Cases",
          value: "critical"
        },
        {
          text: "Cases Per Million",
          value: "casesPerOneMillion"
        }
      ],
      sortKey: "todayCases",
      sortOrder: "desc"
    };
  },
  props: {
    records: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss">
.pointer {
  cursor: pointer;
}
</style>
