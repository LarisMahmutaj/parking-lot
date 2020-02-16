<template>
	<div class="px-5">
		<div class="d-flex flex-column w-75 py-5" v-if="getUser.isAdmin">
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
					<small id="idInfo" class="form-text text-primary"
						>Auto Generated</small
					>
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
		<AccessDenied v-else />
	</div>
</template>

<script>
	/*eslint-disable*/
	import axios from "axios";
	import { mapActions, mapGetters } from "vuex";
	import AccessDenied from "../AccessDenied";

	export default {
		name: "NewSpot",
		components: {
			AccessDenied: AccessDenied
		},
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
		computed: {
			...mapGetters(["getUser"])
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