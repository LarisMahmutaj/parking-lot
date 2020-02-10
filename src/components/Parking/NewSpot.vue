<template>
	<div class="d-flex flex-column w-75 py-5">
		<form @submit.prevent="onSubmit">
			<div class="form-group">
				<label for="id">Id:</label>
				<input
					type="text"
					id="id"
					class="form-control"
					v-model="spot.spot_id"
					aria-describedby="idInfo"
					readonly
				/>
				<small id="idInfo" class="form-text text-muted">Auto Generated</small>
			</div>
			<div class="form-group">
				<label for="price">Price:</label>
				<b-form-radio-group
					required
					v-model="spot.price"
					:options="options"
				></b-form-radio-group>
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
	import { mapActions } from "vuex";

	export default {
		name: "NewSpot",
		data() {
			return {
				spot: {
					spot_id: "",
					start_time: null,
					status: "Free"
				},
				options: [
					{ text: "1.00€", value: 1.0 },
					{ text: "1.50€", value: 1.5 },
					{ text: "2.00€", value: 2.0 },
					{ text: "3.00€", value: 3.0 }
				]
			};
		},
		created() {
			axios.get(`http://localhost:4000/spots`).then(response => {
				this.spot.spot_id = response.data.length + 1;
			});
		},
		methods: {
			...mapActions(["addSpot"]),

			onSubmit() {
				this.addSpot(this.spot);
				this.$router.push({
					name: "parking-lot"
				});
			}
		}
	};
</script>

<style scoped>
	.container {
		height: 100%;
	}
</style>