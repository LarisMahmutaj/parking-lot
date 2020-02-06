<template>
  <div class="d-flex flex-column w-75 py-5">
    <form @submit="onSubmit">
      <div class="form-group">
        <label for="id">Id:</label>
        <input
          type="text"
          id="id"
          class="form-control"
          v-model="spot.spot_id"
          aria-describedby="idInfo"
        />
        <small id="idInfo" class="form-text text-muted">
          Last spot id:
          <strong>{{spotsLength}}</strong>
        </small>
      </div>
      <div class="form-group">
        <label for="status">Status:</label>
        <select id="status" class="form-control" v-model="spot.status">
          <option>Free</option>
          <option>Occupied</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">
        <i class="fas fa-plus"></i> Add Spot
      </button>
    </form>
  </div>
</template>

<script>
/*eslint-disable*/
import axios from "axios";

export default {
  name: "NewSpot",
  data() {
    return {
      spotsLength: "",
      spot: {
        spot_id: "",
        start_time: null,
        receipt: null,
        status: "Free"
      },
      customers: {}
    };
  },
  created() {
    axios.get(`http://localhost:4000/customers`).then(response => {
      this.customers = response.data;
    });
    axios.get(`http://localhost:4000/spots`).then(response => {
      this.spotsLength = response.data.length;
    });
  },
  methods: {
    onSubmit() {
      axios.post(`http://localhost:4000/spots`, this.spot).then(response => {
        this.$router.push({
          name: "home"
        });
      });
    }
  }
};
</script>

<style scoped>
.container {
  height: 100%;
}

button {
  width: 100px;
}
</style>