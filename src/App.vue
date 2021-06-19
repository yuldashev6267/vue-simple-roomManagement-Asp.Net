<template>
    <v-app>
      <v-app-bar app elevation="12" dark>
        <v-toolbar-title>Room Management system</v-toolbar-title>
          <v-col cols="1"   class="d-flex justify-center align-center" align-self="end" :key="item.title" v-for="item in items">
            <router-link  :to="item.path" class="link">
              <v-btn>{{item.title}}</v-btn>
            </router-link>
            </v-col>
      </v-app-bar>
      <router-view></router-view>
  </v-app>
</template>


<script>
export default {
  name:"App",
  data(){
    return{
      items:[
        {title:"Home",path:"/"},
        {title:"Rooms",path:"/rooms"},
      ]
    }
  }
}
</script>


<style scoped>
  .links {
    float: right;
  }
  .link {
    text-decoration:none;
  }
  
    
</style>
