<template>
    <div class="scopedDiv">
    <h1>All bokings</h1>
    <v-simple-table
    fixed-header
    height="300px"
  >
      <thead>
        <tr>
          <th class="text-left">
            From
          </th>
          <th class="text-left">
            To
          </th>
          <th class="text-left">
            Room Number
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in allBookings"
          :key="item.bookingId"
        >
          <td>{{ item.from }}</td>
          <td>{{ item.to }}</td>
          <td>{{ item.room.name }}</td>
        </tr>
      </tbody>
  </v-simple-table>
    </div>
  </template>
      
  
<script>
import axios from "axios";
export default {
    name:"AllBooking",
    data(){
        return {
            allBookings:[]
        }
    },
   
    methods:{
      async fetchAllBooking(){
          const res = await axios.get(`http://localhost:55747/api/${this.$route.params.id}/all-bookings`);
            this.allBookings = res.data;
      }
    },
    beforeMount(){
        this.fetchAllBooking()
    },
   
}
</script>



<style scoped>
    .scopedDiv {
        height: 250px;
        width:750px;
        margin:100px auto;
    }
</style>