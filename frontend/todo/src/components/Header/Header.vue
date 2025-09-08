<template>
  <v-app>
    <v-container class="box-template-page">
      <!-- Drawer colapsável -->

     
      <v-navigation-drawer v-model="drawer" temporary>
        <v-list>
          <v-list-item>
            <v-list-item-title>Menu 1</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <!-- App Bar -->
      <v-app-bar class="navbar-box" :elevation="2">
        <!--
        <<template v-slot:prepend>
          <v-app-bar-nav-icon @click="toggleDrawer" />
        </template>
        -->
        <v-app-bar-title>Stec</v-app-bar-title>
      </v-app-bar>

      
      <div class="router-view-box">
        <router-view></router-view>
      </div>
      
      <div class="footer-box">
        <Footer></Footer>
      </div>
      

    </v-container>
  </v-app>
</template>

<script setup>

import Footer from '../Footer/Footer.vue'

import { ref } from 'vue'

const drawer = ref(false)

function toggleDrawer() {
  drawer.value = !drawer.value
}


</script>

<style scoped>


.navbar-box{
    height: 7%;
}

.router-view-box{
    display: flex;
    width: 100%;
    height: 80%;
    position: absolute;
    left: 0;
    top: 7%;
    box-sizing: border-box;
}

.footer-box{
    box-sizing: border-box;
    display: flex;
    position: absolute;
    height: 13%;
    width: 100%;
    bottom: 0;
    left: 0;
}

.box-template-page{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
}

</style>

