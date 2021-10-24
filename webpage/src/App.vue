<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
    >
      <!--  -->
      <v-list class="mt-0 pt-0">

        <!-- Router link is used to make the item clickable -->
        <!-- https://stackoverflow.com/questions/55779555/vuetify-create-image-that-links-to-another-page -->
        <!-- https://router.vuejs.org/api/#router-link -->
        <!-- https://stackoverflow.com/questions/44808474/vue-router-how-to-remove-underline-from-router-link -->
        <router-link to="/" style="text-decoration: none; color: inherit;">
          <v-list-item>
            <v-list-item-icon class="ml-6">
              <v-img src="@/assets/logo_80x80.png"></v-img>
            </v-list-item-icon>
            <v-list-item-title class="font-weight-light" style="font-size: 1.8em;">ITRAP</v-list-item-title>
          </v-list-item>
        </router-link>

        <v-divider></v-divider>

        <v-list-item
          v-for="item in navigationDrawerItems"
          :key="item.text"
          link
          :to="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="white">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <!--<v-spacer></v-spacer>
      <v-img src="@/assets/logo_200x200.png" max-width="125" class="mr-16"></v-img>
      <v-spacer></v-spacer>-->
      
      <v-spacer></v-spacer>
      <!--<v-toolbar-title class="font-weight-light mr-16">Information Technology Risk Auditing Platform</v-toolbar-title>-->
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Information Technology Risk Auditing Platform</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
// A more professional and flexible way: https://reactgo.com/vue-set-title/
// And using the router: https://www.digitalocean.com/community/tutorials/vuejs-vue-router-modify-head
document.title="ITRAP";

//const router = require('@/router/index.js');

export default {
  name: 'App',

  data: () => {
    return {
      drawer: true,

      navigationDrawerItems: [
        { icon: 'mdi-chart-box', text: 'Quick audit', link: '/'},
        { icon: 'mdi-chart-bar-stacked', text: 'Custom risk audit', link: 'customriskaudit'},
      ]
    }
  },
};
</script>
