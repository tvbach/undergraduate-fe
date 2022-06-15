<template>
  <div class="login-template">
    <div class="login-box">
      <div class="login-box-header">
        <span> Login to your Edumy Acount! </span>
      </div>
      <div class="login-box-content">
        <div class="omiauth-social-network">
          <div
            v-for="(item, index) in this.list_social" :key="index"
            class="login-social"
          >
            <v-btn block height="50">
              <div class="mid-social">
                <img :src="item.img" class="mr-2">
              </div>
              <span> {{ item.content }} </span>
            </v-btn>
          </div>
        </div>
        <div v-if="authenError" class="error-block-authen">
          <span> {{ authenError }} </span>
        </div>
        <div class="login-with-account">
          <div class="email-block">
            <v-text-field
              solo
              label="Email"
              prepend-inner-icon="mdi-email-outline"
              hide-details="auto"
              v-model="data.email"
            />
          </div>

          <div class="password-block">
            <v-text-field
              solo
              label="Password"
              prepend-inner-icon="mdi-lock-outline"
              type="password"
              hide-details="auto"
              v-model="data.password"
            />
          </div>

          <div class="submit-block">
            <v-btn
              block
              class="ma-2 secondary-button"
              @click="onSubmit(data)"
            >
              Log In
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    layout: 'user_layout',
    middleware: 'authority',

    data() {
      return {
        list_social: [
          { content: 'Continue with Facebook', img: '/images/icons8-facebook.svg' },
          { content: 'Continue with Google', img: '/images/icons8-google.svg' }
        ],

        data: {
          email: '',
          password: ''
        }
      }
    },

    methods: {
      ...mapActions('modules/user', ['authentications']),
      async onSubmit(data) {
        await this.authentications(data)
      }
    },

    computed: {
      ...mapGetters('modules/user', ['authenError', 'access_token', 'logged'])
    }
  }
</script>
