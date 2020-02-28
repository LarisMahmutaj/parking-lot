<template>
	<div>
		<div v-if="getUser.loggedIn">
			<div class="row">
				<div class="col-lg-3">
					<Parked v-if="!getUser.isAdmin" />
				</div>
				<div
					class="parking-lot"
					:class="{
						'col-lg-12': getUser.isAdmin,
						'col-lg-9': !getUser.isAdmin
					}"
				>
					<div style="min-width:50%">
						<div
							class="text-center d-flex flex-row justify-content-between pl-3"
						>
							<h3 class="m-0">Free: {{ freeSpots.length }}</h3>
						</div>
						<hr class="my-0" />
						<div
							class="spot-group"
							:class="{ 'justify-content-center': !getUser.isAdmin }"
						>
							<div v-for="s in freeSpots" :key="s.spot_id">
								<Spot :spot="s" />
							</div>
						</div>
					</div>
					<div v-if="getUser.isAdmin" style="min-width:50%">
						<div
							class="d-flex flex-row justify-content-between align-items-center pl-3"
						>
							<h3 class="m-0">Occupied: {{ occupiedSpots.length }}</h3>
							<div class="custom-control custom-switch">
								<input
									type="checkbox"
									class="custom-control-input"
									id="customSwitch1"
									v-model="plates"
								/>
								<label class="custom-control-label" for="customSwitch1"
									>Show Car Plates</label
								>
							</div>
						</div>
						<hr class="my-0" />
						<div class="spot-group">
							<div v-for="s in occupiedSpots" :key="s.spot_id">
								<Spot :spot="s" />
							</div>
						</div>
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
	import Parked from "./Parked";
	import AccessDenied from "../AccessDenied";
	import { mapGetters, mapActions } from "vuex";

	export default {
		data() {
			return {
				plates: null
			};
		},
		name: "ParkingLot",
		computed: mapGetters(["freeSpots", "occupiedSpots", "getUser", "showPlates"]),
		components: {
			Spot: Spot,
			AccessDenied: AccessDenied,
			Parked: Parked
		},
		created() {
			this.fetchSpots();
			this.fetchCustomers();
			this.plates = this.showPlates;
		},
		methods: {
			...mapActions(["fetchSpots", "updateShowPlates", "fetchCustomers"])
		},
		watch: {
			plates: function() {
				this.updateShowPlates(this.plates);
			}
		}
	};
</script>

<style scoped>
	.spot-group {
		width: 100%;
		height: inherit;
		display: flex;
		align-content: middle;
		flex-wrap: wrap;
	}

	.parking-lot {
		display: flex;
		flex-direction: row;
		justify-content: center;
		height: inherit;
	}
</style>
