<template>
	<div v-if="getUser.isAdmin">
		<div id="spot-details" class="my-5 d-flex flex-column align-items-center">
			<div id="alert" class="alert alert-info fade show w-50" role="alert">
				<h4 class="alert-heading">End Session?</h4>
				<hr />
				<div class="d-flex justify-content-between align-items-center">
					<h5 class="m-0">Receipt: {{ spotDetails.receipt.toFixed(2) }}€</h5>
					<button
						type="button"
						class="btn btn-primary"
						data-dismiss="alert"
						aria-label="Close"
						@click="endSession"
					>
						End
					</button>
				</div>
			</div>
			<ul class="list-group w-50">
				<!-- Status -->
				<li
					class="list-group-item font-weight-bold"
					:class="{
						'list-group-item-success': spotDetails.status == 'Free',
						'list-group-item-danger': spotDetails.status == 'Occupied'
					}"
				>
					Spot {{ spotDetails.spot_id }}: {{ spotDetails.status }}
				</li>

				<!-- Price -->
				<li class="list-group-item">Price: {{ spotDetails.price }}€ / h</li>

				<!-- Start Time -->
				<li class="list-group-item" v-if="spotDetails.start_time == null">
					Start Time:
				</li>
				<li class="list-group-item" v-else>
					Start Time:
					{{ new Date(spotDetails.start_time).toLocaleString("en-GB") }}
				</li>

				<!-- Receipt -->
				<li
					class="list-group-item text-info font-weight-bold"
					v-if="spotDetails.receipt === null"
				>
					Receipt: 0.00€
				</li>
				<li class="list-group-item text-info font-weight-bold" v-else>
					Receipt: {{ spotDetails.receipt.toFixed(2) }}€
				</li>
			</ul>
			<div class="py-3 w-25 d-flex flex-row justify-content-around">
				<router-link to="/parking-lot" class="btn btn-dark"
					><i class="fas fa-arrow-left"></i> Parking Lot</router-link
				>
				<button
					v-if="spotDetails.status === 'Free'"
					class="btn btn-info"
					@click="startSession"
				>
					<i class="fas fa-stopwatch"></i> Start Session
				</button>
				<button @click="showAlert" v-else class="btn btn-info">
					<i class="fas fa-stopwatch"></i> End Session
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	/*eslint-disable*/
	import { mapGetters, mapActions } from "vuex";

	export default {
		data() {
			return {
				spot: {}
			};
		},
		computed: {
			...mapGetters(["spotDetails", "allInvoices", "getUser"])
		},
		created() {
			this.fetchInvoices();
		},

		methods: {
			...mapActions(["getSpot", "updateSpot", "addInvoice", "fetchInvoices"]),
			showAlert() {
				document.getElementById("alert").style.transition = "0.1";
				document.getElementById("alert").style.display = "block";
			},
			async startSession() {
				var updSpot = this.spotDetails;
				updSpot.start_time = new Date();
				updSpot.status = "Occupied";

				await this.updateSpot(updSpot);

				this.$router.push({
					name: "parking-lot"
				});
			},
			async endSession() {
				//End Session
				const updSpot = { ...this.spotDetails };
				updSpot.start_time = null;
				updSpot.status = "Free";
				updSpot.receipt = 0;

				//Set Invoice
				var invoiceId = this.allInvoices.length + 1;
				var invoice = {
					invoice_id: invoiceId,
					spot_id: this.spotDetails.spot_id,
					start_time: new Date(this.spotDetails.start_time),
					end_time: new Date(),
					receipt: this.spotDetails.receipt
				};

				await this.addInvoice(invoice);
				await this.updateSpot(updSpot);
				this.$router.push({
					name: "parking-lot"
				});
			}
		}
	};
</script>

<style scoped>
	.alert {
		display: none;
	}
</style>