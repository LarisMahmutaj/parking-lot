<template>
	<div
		class="d-flex justify-content-around align-items-center"
		style="min-height: 90vh; min-width: 90%"
	>
		<div>
			<form class="card m-3 p-5" @submit.prevent="submit">
				<h3 class="mb-4">Log In</h3>
				<div class="form-group">
					<label for="email">Email:</label>
					<input
						type="email"
						class="form-control"
						id="email"
						required
						v-model="form.email"
					/>
				</div>
				<div class="form-group">
					<label for="password">Password:</label>
					<input
						type="password"
						class="form-control"
						id="password"
						required
						v-model="form.password"
					/>
				</div>
				<p class="text-danger" v-if="error">{{ error }}</p>
				<button type="submit" class="btn btn-outline-success">Log In</button>
			</form>
		</div>
		<img src="../../assets/login-img.svg" alt="" />
	</div>
</template>

<script>
	/* eslint-disable*/
	import firebase from "firebase";
	export default {
		data() {
			return {
				form: {
					email: "",
					password: ""
				},
				error: null
			};
		},
		methods: {
			submit() {
				firebase
					.auth()
					.signInWithEmailAndPassword(this.form.email, this.form.password)
					.then(data => {
						this.$router.push({
							name: "parking-lot"
						});
					})
					.catch(err => {
						this.error = err.message;
					});
			}
		}
	};
</script>

<style scoped>
	@media only screen and (min-width: 768px) {
		img {
			width: 500px;
		}
		.card {
			width: 400px;
		}
	}
	@media only screen and (max-width: 992px) {
		img {
			display: none;
		}
	}
</style>