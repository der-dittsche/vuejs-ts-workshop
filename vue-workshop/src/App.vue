<template>
  <NavbarVue />
  <div class="mainc">Hallo Welt</div>
</template>
<script lang="ts">
import NavbarVue from "@/components/NavBar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: { NavbarVue },
});
</script>
<style>
.mainc {
  margin: 3em;
  padding-block: 3em;
  background-color: beige;
}
</style>
