<template>
	<div
		class="d-flex justify-content-around align-items-center"
		style="height: 90vh; width: 90%"
	>
		<div>
			<form class="card p-5 border-primary" @submit.prevent="submit" action="#">
				<h3 class="mb-4">Register</h3>
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
					<label for="username">Username: </label>
					<input
						type="text"
						class="form-control"
						id="username"
						required
						v-model="form.username"
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
				<button type="submit" class="btn btn-outline-success">Register</button>
			</form>
		</div>
		<!-- <img src="../../assets/login-img.svg" alt="" /> -->
	</div>
</template>

<script>
	import firebase from "firebase";

	export default {
		data() {
			return {
				form: {
					email: "",
					password: "",
					username: ""
				},
				error: null
			};
		},
		methods: {
			submit() {
				firebase
					.auth()
					.createUserWithEmailAndPassword(this.form.email, this.form.password)
					.then(data => {
						data.user
							.updateProfile({
								displayName: this.form.username
							})
							.then(() => {});
					})
					.catch(err => {
						this.error = err.message;
					});
			}
		}
	};
</script>

<style scoped>
	img {
		width: 500px;
	}
	.card {
		width: 400px;
	}
</style>