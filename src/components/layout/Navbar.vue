<template>
	<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
		<router-link class="navbar-brand" to="/parking-lot"
			><i class="fas fa-car"></i> Parking Lot</router-link
		>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarColor01"
			aria-controls="navbarColor01"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarColor01">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item">
					<router-link class="nav-link" :to="{ name: 'parking-lot' }"
						>Parking Lot</router-link
					>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" :to="{ name: 'new-spot' }"
						>Add Spot</router-link
					>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" :to="{ name: 'new-customer' }"
						>Add Customer</router-link
					>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" :to="{ name: 'invoices' }"
						>Invoices</router-link
					>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
	export default {};
</script>

<style></style>
