<template>
	<div class="container">
		<div
			class="text-white d-flex justify-content-center align-items-center py-5"
		>
			<div>
				<h2 class="my-4">Parking Lot</h2>
				<div class="small">
					<h4 class="my-3">
						An application that you can use to:
					</h4>
					<ul class="list-group text-primary">
						<li class="list-group-item list-group-item-action">
							<h5>View the number of free parking spots</h5>
						</li>
						<li class="list-group-item list-group-item-action">
							<h5>See the state of your rented spot</h5>
						</li>
						<li class="list-group-item list-group-item-action">
							<h5>Manage spots and customers as an admin</h5>
						</li>
						<li class="list-group-item list-group-item-action">
							<h5>And other features</h5>
						</li>
					</ul>
				</div>
				<div
					id="carouselExampleCaptions"
					class="carousel slide"
					data-ride="carousel"
				>
					<ol class="carousel-indicators">
						<li
							data-target="#carouselExampleCaptions"
							data-slide-to="0"
							class="active"
						></li>
						<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
						<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
					</ol>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="../assets/slide-one.png" />
							<div class="carousel-caption d-none d-md-block">
								<h5>Free Spots</h5>
								<p>
									View the number of free spots in the parking lot
								</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src="../assets/slide-two.png" />
							<div class="carousel-caption d-none d-md-block">
								<h5>Rented Spot State</h5>
								<p>If you're parked, view the state of your rented space</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src="../assets/slide-three.png" />
							<div class="carousel-caption d-none d-md-block">
								<h5>Admin Privileges</h5>
								<p>
									Admins can start/end parking sessions and view the state of
									all spots and also add new spots to the parking lot
								</p>
							</div>
						</div>
					</div>
					<a
						class="carousel-control-prev"
						href="#carouselExampleCaptions"
						role="button"
						data-slide="prev"
					>
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a
						class="carousel-control-next"
						href="#carouselExampleCaptions"
						role="button"
						data-slide="next"
					>
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "About"
	};
</script>

<style scoped>
	li {
		list-style-type: none;
	}

	.carousel {
		width: 860px;
		height: 484px;
	}

	.small {
		display: none;
	}

	@media only screen and (max-width: 900px) {
		.carousel {
			display: none;
		}

		.small {
			display: block;
		}
	}
</style>