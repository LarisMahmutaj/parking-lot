<template>
	<div
		class="d-flex justify-content-around align-items-center"
		style="min-height: 90vh; min-width: 90%"
	>
		<div
			class="card m-3 p-5 w-75 d-flex flex-row justify-content-around align-items-center"
		>
			<form class="w-auto" @submit.prevent="submit" action="#">
				<h3 class="mb-4">Register</h3>
				<div class="form-row">
					<div class="form-group col-md-8">
						<label for="email">Email:</label>
						<input
							type="email"
							class="form-control"
							id="email"
							required
							v-model="form.email"
						/>
					</div>
				</div>
				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="first-name">First Name:</label>
						<input
							type="text"
							class="form-control"
							id="first-name"
							required
							v-model="form.first_name"
						/>
					</div>
					<div class="form-group col-md-6">
						<label for="last-name">Last Name:</label>
						<input
							type="text"
							class="form-control"
							id="last-name"
							required
							v-model="form.last_name"
						/>
					</div>
				</div>
				<div class="form-row">
					<div class="form-group col-md-8">
						<label for="username">Username: </label>
						<input
							type="text"
							class="form-control"
							id="username"
							required
							v-model="form.username"
						/>
					</div>
				</div>
				<div class="form-row">
					<div class="form-group col-md-8">
						<label for="password">Password:</label>
						<input
							type="password"
							class="form-control"
							id="password"
							required
							v-model="form.password"
						/>
					</div>
				</div>
				<div class="form-row">
					<div class="form-group col-md-6">
						<label for="reg-plate">Car Registration Plate:</label>
						<input
							type="text"
							id="reg-plate"
							class="form-control"
							required
							v-model="form.car_reg_plate"
						/>
					</div>
					<div class="form-group col-md-6">
						<label for="phone-number">Phone Number:</label>
						<input
							type="text"
							id="phone-number"
							class="form-control"
							required
							v-model="form.phone_number"
						/>
					</div>
				</div>
				<p class="text-danger" v-if="error">{{ error }}</p>
				<button type="submit" class="btn btn-outline-success">Register</button>
				<p class="mt-2">
					<router-link to="/login"
						>Already have an account? Log In!</router-link
					>
				</p>
			</form>
			<div id="image">
				<img src="../../assets/register-img.svg" alt="" />
				<h3 class="text-center my-4">Parking Lot</h3>
			</div>
		</div>
	</div>
</template>

<script>
	/*eslint-disable*/
	import firebase from "firebase";
	import axios from "axios";
	import { mapActions } from "vuex";

	export default {
		data() {
			return {
				form: {
					email: "",
					first_name: "",
					last_name: "",
					username: "",
					password: "",
					car_reg_plate: "",
					phone_number: ""
				},
				firebase_id: "",
				error: null
			};
		},
		methods: {
			...mapActions(["fetchUser"]),

			submit: async function() {
				var firebaseId = "";
				await firebase
					.auth()
					.createUserWithEmailAndPassword(this.form.email, this.form.password)
					.then(data => {
						firebaseId = data.user.uid;
						console.log(firebaseId);
						data.user
							.updateProfile({
								displayName: this.form.username
							})
							.then(() => {});
						this.error = null;
					})
					.catch(err => {
						this.error = err.message;
					});
				console.log(firebaseId);
				if (!this.error) {
					var customer = {
						firebase_id: firebaseId,
						first_name: this.form.first_name,
						last_name: this.form.last_name,
						email: this.form.email,
						car_reg_plate: this.form.car_reg_plate,
						phone_number: this.form.phone_number,
						is_parked: false,
						times_parked: 0
					};
					await axios.post("http://localhost:4000/customers", customer);

					this.fetchUser();
					this.$router.push({
						name: "parking-lot"
					});
				}
			}
		}
	};
</script>

<style scoped>
	@media only screen and (min-width: 768px) {
		img {
			width: 370px;
		}
	}
	@media only screen and (max-width: 992px) {
		#image {
			display: none;
		}
	}
</style>