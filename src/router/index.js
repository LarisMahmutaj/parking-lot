import Vue from "vue"
import VueRouter from "vue-router"
import ParkingLot from "../components/Parking/ParkingLot"
import NewSpot from "../components/Parking/NewSpot"
import NewCustomer from "../components/Customers/NewCustomer"
import SpotDetails from "../components/Parking/SpotDetails"
import Invoices from "../components/Invoices/Invoices"
import Login from "../components/Auth/Login"
import Register from "../components/Auth/Register"
import About from "../components/About"
import Welcome from "../components/Welcome"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "/welcome",
    component: Welcome
  },
  {
    path: "/parking-lot",
    name: "parking-lot",
    component: ParkingLot
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/new-spot",
    name: "new-spot",
    component: NewSpot
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
  },
  {
    path: "/invoices",
    name: "invoices",
    component: Invoices
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  }
]

const router = new VueRouter({
  routes
})

export default router
