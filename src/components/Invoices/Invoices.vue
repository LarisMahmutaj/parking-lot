<template>
	<div>
		<table class="table table-hover table-light my-5">
			<thead class="thead-dark">
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Spot ID</th>
					<th scope="col">Start Time</th>
					<th scope="col">End Time</th>
					<th scope="col">Receipt</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="invoice in allInvoices" :key="invoice.invoice_id">
					<th scope="row">{{ invoice.invoice_id }}</th>
					<td>{{ invoice.spot_id }}</td>
					<td>{{ new Date(invoice.start_time).toLocaleString("en-GB") }}</td>
					<td>{{ new Date(invoice.end_time).toLocaleString("en-GB") }}</td>
					<td>{{ invoice.receipt.toFixed(2) }}€</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	/* eslint-disable */
	import { mapGetters, mapActions } from "vuex";

	export default {
		name: "Invoices",

		computed: mapGetters(["allInvoices"]),
		created() {
			this.fetchInvoices();
		},
		methods: {
			...mapActions(["fetchInvoices"])
		}
	};
</script>

<style>
</style>