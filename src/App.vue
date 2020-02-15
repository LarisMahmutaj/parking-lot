<template>
	<div id="app">
		<Navbar />
		<router-view class="container-fluid" />
	</div>
</template>

<script>
	import Navbar from "./components/layout/Navbar";

	export default {
		components: {
			Navbar: Navbar
		}
	};
</script>

<style>
	#app {
		background-color: #68c5db;
		min-height: 100%;
	}
</style>
