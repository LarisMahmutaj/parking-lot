<template>
	<div>
		<div
			v-if="parkedSpot"
			class="card m-5 bg-success font-weight-bold text-white"
		>
			<div class="card-body">
				<h5 class="card-title">Parked <i class="fas fa-check"></i></h5>
				<h5 class="card-text">Spot ID: {{ parkedSpot.spot_id }}</h5>
				<h4 class="card-text">Receipt: {{ calcReceipt.toFixed(2) }}€</h4>
			</div>
		</div>
		<div v-else class="card m-5 bg-secondary font-weight-bold text-white">
			<div class="card-body">
				<h5 class="card-title m-0">Not Parked</h5>
			</div>
		</div>
	</div>
</template>

<script>
	/* eslint-disable */
	import { mapGetters } from "vuex";
	import axios from "axios";

	export default {
		name: "Parked",
		data() {
			return {
				parkedSpot: null
			};
		},
		computed: {
			...mapGetters(["getUser", "allCustomers", "allSpots"]),

			calcReceipt: function() {
				if (this.parkedSpot.start_time !== null) {
					let currentTime = new Date();
					let startTime = new Date(this.parkedSpot.start_time);
					let hours = Math.ceil(
						Math.abs(currentTime - startTime) / (60 * 60 * 1000)
					);
					return hours * this.parkedSpot.price;
				} else {
					return 0;
				}
			}
		},
		created() {
			if (this.getUser.loggedIn) {
				const customer = this.allCustomers.filter(
					c => c.firebase_id === this.getUser.data.uid
				)[0];

				if (customer) {
					var checkSpot = this.allSpots.filter(
						s => s.customer_car_plates === customer.car_reg_plate
					);
				}
				if (checkSpot) {
					var parkedSpot = checkSpot[0];
					this.parkedSpot = parkedSpot;
				}
			}
		}
	};
</script>

<style scoped>
</style>