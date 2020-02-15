<template>
	<div class="w-100 d-flex justify-content-center">
		<div class="d-flex w-75 justify-content-around align-items-center my-5">
			<img src="../assets/access-denied.svg" alt="" />
			<div class="text-danger font-weight-bolder">
				<h2>Access Denied</h2>
				<h4>You dont have access to this page</h4>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "AccessDenied"
	};
</script>

<style scoped>
	img {
		width: 450px;
	}
</style>