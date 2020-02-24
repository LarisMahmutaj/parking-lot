<template>
	<div
		class="card text-primary font-weight-bold"
		:class="{
			'border-success': spot.status == 'Free',
			'border-danger': spot.status == 'Occupied'
		}"
	>
		<div
			class="card-header text-white"
			:class="{
				'text-success border-success': spot.status == 'Free',
				'text-danger border-danger': spot.status == 'Occupied'
			}"
		>
			Spot {{ spot.spot_id }}
		</div>
		<div class="card-body">
			<p class="text-muted font-weight-bold small m-0">
				Price: {{ spot.price.toFixed(2) }}€ / h
			</p>
			<p
				class="m-0 text-dark font-weight-bolder"
				v-if="showPlates && spot.status == 'Occupied'"
			>
				Plates: {{ spot.customer_car_plates }}
			</p>
			<div v-if="getUser.isAdmin">
				<p v-if="spot.start_time === null" class="m-0 text-info">
					Receipt: {{ calcReceipt.toFixed(2) }}
				</p>
				<p v-else class="m-0 text-info">
					Receipt: {{ calcReceipt.toFixed(2) }}€
				</p>
			</div>
		</div>

		<a
			v-if="getUser.isAdmin"
			type="button"
			@click.stop="spotDetails(spot._id)"
			class="stretched-link"
		></a>
	</div>
</template>

<script>
	import { mapActions, mapGetters } from "vuex";
	export default {
		name: "Spot",
		props: ["spot"],
		data() {
			return {
				receipt: ""
			};
		},
		computed: {
			...mapGetters(["getUser", "showPlates", "getUser"]),
			calcReceipt: function() {
				if (this.spot.start_time !== null) {
					let currentTime = new Date();
					let startTime = new Date(this.spot.start_time);
					let hours = Math.ceil(
						Math.abs(currentTime - startTime) / (60 * 60 * 1000)
					);
					return hours * this.spot.price;
				} else {
					return 0;
				}
			}
		},
		methods: {
			...mapActions(["fetchSingleSpot"]),
			async spotDetails(spot_id) {
				await this.fetchSingleSpot(spot_id);
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
		width: 228px;
	}
</style>
