<template>
	<nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
		<router-link class="navbar-brand" to="/"
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
				<li class="nav-item" v-if="getUser.loggedIn">
					<router-link class="nav-link" :to="{ name: 'parking-lot' }"
						>Parking Lot</router-link
					>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" :to="{ name: 'about' }"
						>About</router-link
					>
				</li>
			</ul>
			<ul class="navbar-nav" v-if="getUser.loggedIn">
				<li class="nav-item"></li>
				<li class="nav-item">
					<div class="dropdown nav-link">
						<a
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
							>{{ getUser.data.displayName }} <i class="fas fa-caret-down"></i>
						</a>
						<div
							class="dropdown-menu dropdown-menu-right"
							aria-labelledby="dropdownMenuButton"
						>
							<template v-if="getUser.isAdmin">
								<router-link
									to="/new-spot"
									class="dropdown-item text-info bg-white font-weight-bold"
									>Add Spot</router-link
								>
								<router-link
									to="/invoices"
									class="dropdown-item text-info bg-white font-weight-bold"
									>Invoices</router-link
								>
								<router-link
									to="/customers"
									class="dropdown-item text-info bg-white font-weight-bold"
									>Customers</router-link
								>
								<div class="dropdown-divider"></div>
							</template>
							<a
								href="#"
								class="dropdown-item text-danger bg-white font-weight-bold"
								@click.prevent="signOut"
								><i class="fas fa-sign-out-alt"></i> Sign Out</a
							>
						</div>
					</div>
				</li>
			</ul>
			<ul v-else class="navbar-nav">
				<li class="nav-item">
					<router-link to="login" class="nav-link">Login</router-link>
				</li>
				<li class="nav-item">
					<router-link to="register" class="nav-link">Register</router-link>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
	import firebase from "firebase";
	import { mapActions, mapGetters } from "vuex";

	export default {
		name: "Navbar",
		data() {
			return {};
		},
		computed: {
			...mapGetters(["getUser"])
		},
		methods: {
			...mapActions(["clearUser"]),

			signOut() {
				firebase
					.auth()
					.signOut()
					.then(() => {
						this.clearUser();
						this.$router.replace({
							name: "login"
						});
					});
			}
		}
	};
</script>

<style></style>
