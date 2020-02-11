<template>
	<div class="parking-lot">
		<div class="w-50">
			<div class="text-center">
				<h3>Free</h3>
			</div>
			<hr />
			<div class="spot-group">
				<div v-for="s in freeSpots" :key="s.spot_id">
					<Spot :spot="s" />
				</div>
			</div>
		</div>
		<div class="w-50">
			<div class="text-center">
				<h3>Occupied</h3>
			</div>
			<hr />
			<div class="spot-group">
				<div v-for="s in occupiedSpots" :key="s.spot_id">
					<Spot :spot="s" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	/* eslint-disable */
	import Spot from "./Spot";
	import { mapGetters, mapActions } from "vuex";

	export default {
		name: "ParkingLot",
		computed: mapGetters(["freeSpots", "occupiedSpots"]),
		components: {
			Spot: Spot
		},
		created() {
			this.fetchSpots();
		},
		methods: {
			...mapActions(["fetchSpots"])
		}
	};
</script>

<style scoped>
	.spot-group {
		width: 100%;
		height: 100%;
		display: flex;
		align-content: baseline;
		flex-wrap: wrap;
	}

	.parking-lot {
		display: flex;
		flex-direction: row;
	}
</style>
