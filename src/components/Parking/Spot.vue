<template>
  <div
    class="card text-primary font-weight-bold"
    :class="{
      'border-success': spot.status == 'Free',
      'border-danger': spot.status == 'Occupied'
    }"
  >
    <div
      class="card-header text-white text-center"
      :class="{
      'text-success border-success': spot.status == 'Free',
      'text-danger border-danger': spot.status == 'Occupied'
    }"
    >{{ spot.spot_id }}</div>
    <div
      class="card-body text-center"
      :class="{
      'text-success': spot.status == 'Free',
      'text-danger': spot.status == 'Occupied'
    }"
    >{{ spot.status }}</div>
    <a type="button" @click.stop="spotDetails(spot._id)" class="stretched-link"></a>
  </div>
</template>

<script>
export default {
  name: "Spot",
  props: ["spot"],
  methods: {
    spotDetails(spot_id) {
      this.$router.push({
        name: "spot-details",
        params: { id: spot_id }
      });
    }
  }
};
</script>

<style scoped>
.card {
  margin: 10px;
  width: 200px;
}
</style>
