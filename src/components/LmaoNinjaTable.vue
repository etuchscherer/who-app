<template>
  <table>
    <tr>
      <th>#</th>
      <th class="pointer" @click="sortBy('country')">Country</th>
      <th class="pointer" @click="sortBy('cases')">Total Cases</th>
      <th class="pointer" @click="sortBy('todayCases')">Cases Today</th>
      <th class="pointer" @click="sortBy('deaths')">Total Deaths</th>
      <th class="pointer" @click="sortBy('todayDeaths')">Deaths Today</th>
      <th class="pointer" @click="sortBy('recovered')">Recoveries</th>
      <th class="pointer" @click="sortBy('active')">Active Cases</th>
      <th class="pointer" @click="sortBy('critical')">Critical Condition</th>
      <th class="pointer" @click="sortBy('casesPerOneMillion')">Cases Per Million</th>
    </tr>
    <tr
      v-for="(record, index) in sortedRecords"
      v-bind:key="index"
      v-bind:index="index"
    >
      <td>{{ index + 1 }}</td>
      <td>{{ record.country }}</td>
      <td>{{ record.cases }}</td>
      <td>{{ record.todayCases }}</td>
      <td>{{ record.deaths }}</td>
      <td>{{ record.todayDeaths }}</td>
      <td>{{ record.recovered }}</td>
      <td>{{ record.active }}</td>
      <td>{{ record.critical }}</td>
      <td>{{ record.casesPerOneMillion }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  data() {
    return {
      sortKey: "todayCases",
      sortOrder: "desc"
    };
  },
  props: {
    records: {
      type: Array,
      required: true
    }
  },
  methods: {
    sortBy(field) {
      let hasSameField = this.sortKey === field;

      if (hasSameField) {
        return this.reverseOrder();
      } else {
        this.sortKey = field;
        this.sortOrder = "desc";
      }
    },
    reverseOrder() {
      if (this.sortOrder === "desc") {
        this.sortOrder = "asc";
      } else {
        this.sortOrder = "desc";
      }
    }
  },
  computed: {
    sortedRecords() {
      return this._.orderBy(this.records, this.sortKey, this.sortOrder);
    }
  }
};
</script>

<style lang="scss">
.pointer {
  cursor: pointer;
}
</style>
