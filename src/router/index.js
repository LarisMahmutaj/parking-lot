import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import ParkingLot from "../components/Parking/ParkingLot"
import NewSpot from "../components/Parking/NewSpot"
import NewCustomer from "../components/Customers/NewCustomer"
import SpotDetails from "../components/Parking/SpotDetails"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/parking-lot",
    name: "parking-lot",
    component: ParkingLot
  },
  {
    path: "/new-spot",
    name: "new-spot",
    component: NewSpot
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/new-customer",
    name: "new-customer",
    component: NewCustomer
  },
  {
    path: "/spot-details",
    name: "spot-details",
    component: SpotDetails
  }
]

const router = new VueRouter({
  routes
})

export default router
