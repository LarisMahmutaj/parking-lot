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
		background-color: #1a8fe3;
		min-height: 100%;
	}
</style>
