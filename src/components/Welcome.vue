<template>
	<div class="d-flex flex-column p-4">
		<div class="d-flex align-items-center justify-content-around">
			<div>
				<h1 class="text-white">Welcome to Parking Lot</h1>
				<h4 class="pb-4 text-white" style="color:#333">
					Find a parking space in a matter of minutes
				</h4>
				<div>
					<router-link to="/login" class="btn mr-2 btn-primary"
						>Login</router-link
					>
					<router-link to="/register" class="btn btn-primary"
						>Register</router-link
					>
				</div>
			</div>
			<img src="../assets/welcome.svg" alt="" />
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

	@media only screen and (max-width: 1200px) {
		img {
			display: none;
		}
	}
</style>