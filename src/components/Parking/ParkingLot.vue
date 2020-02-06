<template>
  <div class="parking-lot">
    <div class="spot-group">
      <div v-for="s in freeSpots" :key="s.spot_id">
        <Spot :spot="s" />
      </div>
    </div>
    <div class="spot-group">
      <div v-for="s in occupiedSpots" :key="s.spot_id">
        <Spot :spot="s" />
      </div>
    </div>
  </div>
</template>

<script>
//eslint-disable
import Spot from "./Spot";
import axios from "axios";

export default {
  name: "ParkingLot",
  data() {
    return {
      freeSpots: {},
      occupiedSpots: {}
    };
  },
  components: {
    Spot: Spot
  },
  created() {
    axios
      .get(`http://localhost:4000/spots`)
      .then(response => {
        this.freeSpots = response.data.filter(spot => spot.status == "Free");
        this.occupiedSpots = response.data.filter(
          spot => spot.status == "Occupied"
        );
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {}
};
</script>

<style scoped>
.spot-group {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.parking-lot {
  display: flex;
  flex-direction: row;
}
</style>
