<template>
	<div class="d-flex flex-column p-4">
		<div class="d-flex align-items-center">
			<img src="../assets/welcome.svg" alt="" />
			<div>
				<h1>Welcome to Parking Lot</h1>
				<h4>Find a parking space in a matter of minutes</h4>
				<div>
					<router-link to="/login" class="btn btn-primary mr-2"
						>Login</router-link
					>
					<router-link to="/register" class="btn btn-primary"
						>Register</router-link
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Welcome"
	};
</script>

<style scoped>
	img {
		width: 800px;
	}
</style>