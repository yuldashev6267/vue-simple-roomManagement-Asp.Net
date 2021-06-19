<template>
        <v-container>
        <v-row justify="space-between">
            <v-col order="last" class="rooms" cols="10"
        md="8" xs=12>
        <v-card v-for="room in rooms" :key="room.id" class="pa-2">                   
                <v-card-text>Room management system</v-card-text><v-card-title> Room Number: {{room.name}}</v-card-title>
                <router-link class="link" :to="{name:'AllBooking',params:{id:`${room.id}`}}">
                    <v-btn>All bookings</v-btn>
                </router-link>
                <router-link :to="{name:'Booking',params:{id:`${room.id}`}}" class="link">
                    <v-btn>Booking</v-btn>
                </router-link>
            </v-card>
            </v-col>
        </v-row>
        </v-container>
</template>
<script>
import axios from "axios"
export default {
    name:"Rooms",
    data(){
        return {
            rooms:[],
        }
    },
   async created(){
        this.rooms = await this.fetchData();
    },
    watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  
  methods:{
        async fetchData(){
            const res = await axios.get("http://localhost:55747/api/room");
            return res.data;
        },
        
    }
}
</script>


<style scoped>
    .rooms {
        margin:100px auto;
    }
    .link{

        text-decoration:none
    } 
</style>>

