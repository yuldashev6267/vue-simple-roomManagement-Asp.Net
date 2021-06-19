import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import RoomsLink from "./views/Rooms";
import Booking from "./views/BookingRouter";
import AllBooking from "./views/AllBookingPage";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/rooms", name: "RoomsLink", component: RoomsLink },
    { path: "/add-booking/:id", name: "Booking", component: Booking },
    { path: "/all-booking/:id", name: "AllBooking", component: AllBooking },
  ],
});
