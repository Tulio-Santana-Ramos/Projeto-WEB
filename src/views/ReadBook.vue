<template>
  <div>
    <vue-pdf-embed :source="getSrc()" />
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'

import {VueCookieNext} from "vue-cookie-next";
export default {
  components: {
    VuePdfEmbed,
  },
  methods:{
    getSrc(){
      return VueCookieNext.getCookie("lastBook");
    }
  },
}
</script>