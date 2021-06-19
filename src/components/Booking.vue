<template>
        <v-form class="main" @submit.prevent="submitForm">   
     <v-row justify="space-around">
         <div style="margin-right:5px">
    <v-date-picker
      v-model="picker"
      color="green lighten-1"
    ></v-date-picker>
         </div>
    <v-date-picker
      v-model="picker2"
      color="green lighten-1"
      header-color="primary"
    ></v-date-picker>
  </v-row>
      <button class="btn">Submit</button>
      <v-alert v-if="error" type="error">
      {{error}}
    </v-alert>
        </v-form>
</template>


<script>
import axios from "axios"
export default {
    name:"Booking",
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10),
        picker2: new Date().toISOString().substr(0, 10),
        error:null
        
      }
    },
    methods:{
        async submitForm(){
          try {
             const res =   await axios.post(`http://localhost:55747/api/booking/${this.$route.params.id}`,{from:this.picker,to:this.picker2},{
            headers:{
              "Content-Type":"application/json"
            }
          })
           this.$router.push({ path : '/rooms' });
        }catch (error) {
          this.error = error.response.data
          setTimeout(() => {
            this.error = null
          }, 5000);
          }
          } 
      
    }
  }
</script>

<style scoped>
    .main {
        margin:100px auto
    }
    .btn{
margin:15px 15px
    }
</style>