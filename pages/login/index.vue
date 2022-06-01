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
        <div class="login-with-account">
          <div class="email-block">
            <v-text-field
              solo
              readonly
              label="Email"
              prepend-inner-icon="mdi-email-outline"
              hide-details
            />
          </div>

          <div class="password-block">
            <v-text-field
              solo
              readonly
              label="Password"
              prepend-inner-icon="mdi-lock-outline"
              type="password"
              hide-details
            />
          </div>

          <div class="submit-block">
            <v-btn
              block
              class="ma-2 secondary-button"
              :loading="loading"
              :disabled="loading"
              @click="loader = 'loading'"
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
  export default {
    layout: 'user_layout',
    data() {
      return {
        list_social: [
          { content: 'Continue with Facebook', img: '/images/icons8-facebook.svg' },
          { content: 'Continue with Google', img: '/images/icons8-google.svg' }
        ],
        loader: null,
        loading: false
      }
    },

    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    }
  }
</script>
