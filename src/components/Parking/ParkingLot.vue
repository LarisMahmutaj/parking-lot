<template>
	<div>
		<div class="parking-lot" v-if="getUser.loggedIn">
			<div style="min-width:50%">
				<div class="text-center">
					<h3>Free: {{ freeSpots.length }}</h3>
				</div>
				<hr />
				<div class="spot-group">
					<div v-for="s in freeSpots" :key="s.spot_id">
						<Spot :spot="s" />
					</div>
				</div>
			</div>
			<div v-if="getUser.isAdmin" style="min-width:50%">
				<div class="text-center">
					<h3>Occupied: {{ occupiedSpots.length }}</h3>
				</div>
				<hr />
				<div class="spot-group">
					<div v-for="s in occupiedSpots" :key="s.spot_id">
						<Spot :spot="s" />
					</div>
				</div>
			</div>
		</div>
		<div v-else>
			<AccessDenied />
		</div>
	</div>
</template>

<script>
	/* eslint-disable */
	import Spot from "./Spot";
	import AccessDenied from "../AccessDenied";
	import { mapGetters, mapActions } from "vuex";

	export default {
		name: "ParkingLot",
		computed: mapGetters(["freeSpots", "occupiedSpots", "getUser"]),
		components: {
			Spot: Spot,
			AccessDenied: AccessDenied
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
		height: inherit;
		display: flex;
		align-content: baseline;
		flex-wrap: wrap;
	}

	.parking-lot {
		display: flex;
		flex-direction: row;
		justify-content: center;
		height: inherit;
	}
</style>
