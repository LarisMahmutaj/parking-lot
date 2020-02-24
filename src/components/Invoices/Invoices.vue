<template>
	<div class="invoices table-responsive-sm m-0">
		<table
			class="table table-hover table-light m-md-4 my-3"
			v-if="getUser.isAdmin"
		>
			<thead class="thead-dark">
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Spot ID</th>
					<th scope="col">Car Plates</th>
					<th scope="col">Start Time</th>
					<th scope="col">End Time</th>
					<th scope="col">Receipt</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="invoice in allInvoices.reverse()" :key="invoice.invoice_id">
					<th scope="row">{{ invoice.invoice_id }}</th>
					<td>{{ invoice.spot_id }}</td>
					<td>{{ invoice.car_plates }}</td>
					<td>{{ new Date(invoice.start_time).toLocaleString("en-GB") }}</td>
					<td>{{ new Date(invoice.end_time).toLocaleString("en-GB") }}</td>
					<td>{{ invoice.receipt.toFixed(2) }}€</td>
				</tr>
			</tbody>
		</table>
		<AccessDenied v-else />
	</div>
</template>

<script>
	/* eslint-disable */
	import { mapGetters, mapActions } from "vuex";
	import AccessDenied from "../AccessDenied";

	export default {
		name: "Invoices",
		components: {
			AccessDenied: AccessDenied
		},
		computed: mapGetters(["allInvoices", "getUser"]),
		created() {
			this.fetchInvoices();
		},
		methods: {
			...mapActions(["fetchInvoices"])
		}
	};
</script>

<style scoped>
	.invoices {
		display: flex;
	}
</style>