<template>
  <div>
    <vue-pdf-embed :source="getSrc()"/>
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'

import {VueCookieNext} from "vue-cookie-next";

export default {
  components: {
    VuePdfEmbed,
  },
  methods: {
    /**
     * Passa a URL para o embed do vue para ler pdf
     * @returns {string}
     */
    getSrc() {
      return "/src/assets/" + VueCookieNext.getCookie("lastBook") + ".pdf";
    }
  },
}
</script>