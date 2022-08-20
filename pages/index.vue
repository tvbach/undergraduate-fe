<template>
  <div id="userpage-content">
    <Banner/>
  </div>
</template>

<script>
import Banner from '../components/Banner.vue';

export default {
  layout: "user_layout",
  components: { Banner }
}
</script>
