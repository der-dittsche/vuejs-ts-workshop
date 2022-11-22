<template>
  <NavbarVue />
  <router-view />
  <FooterVue />
</template>
<script lang="ts">
import NavbarVue from "@/components/NavBar.vue";
import FooterVue from "@/components/FooterBar.vue";
import { defineComponent } from "vue";

interface ComponentData {}

export default defineComponent({
  name: "App",
  components: { NavbarVue, FooterVue },
  data(): ComponentData {
    return {};
  },
});
</script>
