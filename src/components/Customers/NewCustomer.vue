<template>
  <div class="d-flex flex-column w-75 py-5">
    <form @submit="onSubmit">
      <div class="form-group">
        <label for="id">Id:</label>
        <input
          type="text"
          id="id"
          class="form-control"
          placeholder="Id"
          v-model="customer.customer_id"
        />
      </div>
      <div class="form-group">
        <label for="name">Name:</label>
        <input
          class="form-control"
          type="text"
          v-model="customer.name"
          placeholder="Name"
          id="name"
        />
      </div>
      <button type="submit" class="btn btn-primary">Add Customer</button>
    </form>
  </div>
</template>

<script>
/*eslint-disable*/
import axios from "axios";

export default {
  name: "NewCustomer",
  data() {
    return {
      customer: {
        expiry_date: new Date(),
        expired: false
      }
    };
  },
  methods: {
    onSubmit() {
      this.customer.expiry_date.setMonth(
        this.customer.expiry_date.getMonth() + 1
      );
      axios
        .post(`http://localhost:4000/customers`, this.customer)
        .then(response => {
          this.$router.push({
            name: "home"
          });
        });
    }
  }
};
</script>

<style>
</style>