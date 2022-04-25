<template>
  <div class="user-layout-root">
      <v-app id="app">
          <v-app-bar color="white">
            <div class="d-flex align-center">
              <v-toolbar-title>
                <nuxt-link class="logo-wrapper" to='/'> Logo </nuxt-link>
              </v-toolbar-title>
              <div class="list-categories">
                <div class="list-item-categories">
                  <div class="name-list-items">
                    <span class="name-list"> Categories </span>
                  </div>
                </div>
              </div>
              <div class="search-courses">
                <v-text-field
                  solo
                  placeholder="Search for anything"
                  light
                  prepend-inner-icon="mdi-magnify"
                  hide-details="false"
                  rounded
                />
              </div>
              <v-list class="pa-0 bg-unset d-flex align-center" light>
                <v-list-item
                  v-for="(item, i) in menu_unlogin"
                  :key="i"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="item.content"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-icon>
                      <v-icon> mdi-cart-outline </v-icon>
                    </v-list-item-icon>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <div class="authentication-user d-flex">
                <div class="user-login">
                  <v-btn depressed light>
                    <span> Log in </span>
                  </v-btn>
                </div>
                <div class="user-signup">
                   <v-btn depressed>
                    <span> Sign up </span>
                  </v-btn>
                </div>
              </div>
              <div class="translate-page">
                <v-btn depressed light small>
                  <v-icon> mdi-earth</v-icon>
                </v-btn>
              </div>
            </div>
          </v-app-bar>
      </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu_unlogin: [
        { content: 'Edumy Businese' },
        { content: 'Teach on Edumy' }
      ]
    }
  }
}
</script>
