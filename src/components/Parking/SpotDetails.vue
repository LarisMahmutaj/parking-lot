<template>
	<div v-if="getUser.isAdmin">
		<div id="spot-details" class="my-5 d-flex flex-column align-items-center">
			<!-- Start Session -->
			<div
				id="start-alert"
				class="alert alert-success fade show w-50"
				role="alert"
			>
				<h4 class="alert-heading">Start Session</h4>
				<hr />
				<div class="d-flex">
					<form
						action="#"
						class="w-100 d-flex flex-column"
						@submit.prevent="startSession"
					>
						<div class="form-group">
							<label for="customer-id">Customer Plates:</label>
							<input
								type="text"
								id="customer-id"
								class="form-control"
								required
								v-model="form.customer_car_plates"
							/>
						</div>
						<div class="align-self-end">
							<button
								type="button"
								class="btn btn-secondary mr-2"
								@click="hideStartAlert"
							>
								Cancel
							</button>
							<button type="submit" class="btn btn-primary">
								Start Session
							</button>
						</div>
					</form>
				</div>
			</div>

			<!-- End session -->
			<div
				id="end-alert"
				class="alert alert-success fade show w-50"
				role="alert"
			>
				<h4 class="alert-heading">End Session?</h4>
				<hr />
				<div class="d-flex justify-content-between align-items-center">
					<h5 class="m-0">Receipt: {{ total }}€</h5>
					<div>
						<button class="btn btn-secondary mr-2" @click="hideEndAlert">
							Cancel
						</button>
						<button
							type="submit"
							class="btn btn-primary"
							data-dismiss="alert"
							aria-label="Close"
							@click="endSession"
						>
							End Session
						</button>
					</div>
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
				<li class="list-group-item" v-if="spotDetails.start_time === null">
					Start Time:
				</li>
				<li class="list-group-item" v-else>
					Start Time:
					{{ new Date(spotDetails.start_time).toLocaleString("en-GB") }}
				</li>
				<li
					class="list-group-item"
					v-if="spotDetails.customer_car_plates === null"
				>
					Customer Plates:
				</li>
				<li class="list-group-item" v-else>
					Customer Plates: {{ spotDetails.customer_car_plates }}
				</li>

				<!-- Receipt -->
				<li
					class="list-group-item text-info font-weight-bold"
					v-if="spotDetails.receipt === null"
				>
					Receipt: 0.00€
				</li>
				<li class="list-group-item text-info font-weight-bold" v-else>
					Receipt: {{ spotDetails.receipt }}€
				</li>
			</ul>

			<!-- Buttons -->
			<div class="py-3 w-25 d-flex flex-row justify-content-around">
				<router-link to="/parking-lot" class="btn btn-dark"
					><i class="fas fa-arrow-left"></i> Parking Lot</router-link
				>
				<button
					v-if="spotDetails.status === 'Free'"
					class="btn btn-primary"
					data-toggle="modal"
					data-target="#exampleModal"
					@click="showStartAlert"
				>
					<i class="fas fa-stopwatch"></i> Start Session
				</button>
				<button @click="showEndAlert" v-else class="btn btn-primary">
					<i class="fas fa-stopwatch"></i> End Session
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	/*eslint-disable*/
	import axios from "axios";
	import { mapGetters, mapActions } from "vuex";

	export default {
		data() {
			return {
				form: {
					customer_car_plates: ""
				},
				customer: {},
				total: 0
			};
		},
		computed: {
			...mapGetters(["spotDetails", "allInvoices", "getUser", "currentCustomer"])
		},
		created() {
			this.fetchInvoices();
			this.findCustomer(this.spotDetails.customer_car_plates);
		},
		methods: {
			showEndAlert() {
				if (this.currentCustomer.times_parked > 10) {
					let rcpt = this.spotDetails.receipt - this.spotDetails.receipt * 0.2;
					this.total = rcpt;
				} else {
					this.total = this.spotDetails.receipt;
				}
				document.getElementById("end-alert").style.transition = "0.1";
				document.getElementById("end-alert").style.display = "block";
			},
			showStartAlert() {
				document.getElementById("start-alert").style.transition = "0.1";
				document.getElementById("start-alert").style.display = "block";
			},
			hideEndAlert() {
				document.getElementById("end-alert").style.display = "none";
			},
			hideStartAlert() {
				document.getElementById("start-alert").style.display = "none";
			},

			...mapActions([
				"getSpot",
				"updateSpot",
				"addInvoice",
				"fetchInvoices",
				"findCustomer"
			]),

			async startSession() {
				var updSpot = this.spotDetails;
				updSpot.start_time = new Date();
				updSpot.status = "Occupied";
				updSpot.customer_car_plates = this.form.customer_car_plates;
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
				updSpot.customer_car_plates = null;

				//Set Invoice
				var invoiceId = this.allInvoices.length + 1;

				var invoice = {
					invoice_id: invoiceId,
					spot_id: this.spotDetails.spot_id,
					car_plates: this.spotDetails.customer_car_plates,
					start_time: new Date(this.spotDetails.start_time),
					end_time: new Date(),
					receipt: this.total
				};

				var customer = { ...this.currentCustomer };

				customer.times_parked += 1;

				await axios.put(
					`http://localhost:4000/customers/${customer._id}`,
					customer
				);

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
	#end-alert,
	#start-alert {
		display: none;
	}
</style>