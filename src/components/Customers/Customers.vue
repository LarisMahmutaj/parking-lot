<template>
	<div class="w-75">
		<table
			class="table table-hover table-light m-md-4 my-3"
			v-if="getUser.isAdmin"
		>
			<thead class="thead-dark">
				<tr>
					<th scope="col">Id</th>
					<th scope="col">First Name</th>
					<th scope="col">Last Name</th>
					<th scope="col">Email</th>
					<th scope="col">Car Plates</th>
					<th scope="col">Phone Number</th>
					<th scope="col">Times Parked</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="c in allCustomers" :key="c._id">
					<td>{{ c._id }}</td>
					<td>{{ c.first_name }}</td>
					<td>{{ c.last_name }}</td>
					<td>{{ c.email }}</td>
					<td>{{ c.car_reg_plate }}</td>
					<td>{{ c.phone_number }}</td>
					<td>{{ c.times_parked }}</td>
				</tr>
			</tbody>
		</table>
		<AccessDenied v-else />
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	import AccessDenied from "../AccessDenied";
	export default {
		created() {
			this.fetchCustomers;
		},
		components: {
			AccessDenied: AccessDenied
		},
		methods: {
			...mapActions(["fetchCustomers"])
		},
		computed: {
			...mapGetters(["allCustomers", "getUser"])
		}
	};
</script>

<style>
</style>