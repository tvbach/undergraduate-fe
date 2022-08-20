<template>
  <div class="user-layout-root">
    <v-app id="app">
      <v-app-bar color="white">
        <div class="d-flex align-center">
          <v-toolbar-title>
            <nuxt-link class="logo-wrapper" to='/'> Logo </nuxt-link>
          </v-toolbar-title>
          <v-btn class="list-categories custom-btn" plain depressed ripple>
            <div class="list-item-categories">
              <div class="name-list-items">
                <span class="name-list text-font"> Categories </span>
              </div>
            </div>
          </v-btn>
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
              v-for="(item, i) in navbar_loggined"
              :key="i"
            >
              <v-btn class="custom-btn" plain depressed>
                <v-list-item-content class="icon-content">
                  <v-list-item-title class="text-font" v-text="item.content" v-if="item.content"></v-list-item-title>
                  <v-list-item-icon v-if="item.icon">
                    <v-badge
                      color="green"
                      content="6"
                      overlap
                    >
                      <v-icon class=""> {{ item.icon }} </v-icon>
                    </v-badge>
                  </v-list-item-icon>
                </v-list-item-content>
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn class="custom-btn" plain depressed>
                <v-list-item-content class="icon-content">
                  <v-list-item-icon>
                    <v-icon> mdi-cart-outline </v-icon>
                  </v-list-item-icon>
                </v-list-item-content>
              </v-btn>
            </v-list-item>
          </v-list>
          <div class="authentication-user">
            <div v-if="logged" class="user-unlogin d-flex">
              <v-avatar
                color="primary"
                size="36"
              />
            </div>
            <div v-else class="user-logged-in d-flex">
              <div class="user-login">
                <v-btn to="/login" depressed light>
                  <span> Log in </span>
                </v-btn>
              </div>
              <div class="user-signup">
                <v-btn depressed>
                  <span> Sign up </span>
                </v-btn>
              </div>
              <div class="translate-page">
                <v-btn depressed light small>
                  <v-icon class="disable-border"> mdi-earth </v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
      </v-app-bar>
    </v-app>
    <v-main>
      <v-container>
        <Nuxt ref="nuxtApp"/>
      </v-container>
    </v-main>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        menu_unlogin: [
          { content: 'Edumy Businese' },
          { content: 'Teach on Edumy' }
        ],
        nav_logged_in: [
          { content: 'My Learning' },
          { icon: 'mdi-cards-heart-outline' },
          { icon: 'mdi-bell-outline' }
        ]
      }
    },

    computed: {
      ...mapGetters('modules/user', ['logged']),
      navbar_loggined() {
        this.logged ? this.menu_unlogin.push(this.nav_logged_in) : this.menu_unlogin
        return this.menu_unlogin.flat()
      }
    }
  }
</script>
