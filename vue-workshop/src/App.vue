<template>
  <NavbarVue />
  <div class="mainc">
    <h1>Hallo Welt</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius
      dignissimos eum voluptatem eveniet corporis sint at, quo praesentium
      aliquam quis accusamus! Maxime perspiciatis quia sed veniam eum,
      reprehenderit tempore.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius
      dignissimos eum voluptatem eveniet corporis sint at, quo praesentium
      aliquam quis accusamus! Maxime perspiciatis quia sed veniam eum,
      reprehenderit tempore.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eius
      dignissimos eum voluptatem eveniet corporis sint at, quo praesentium
      aliquam quis accusamus! Maxime perspiciatis quia sed veniam eum,
      reprehenderit tempore.
    </p>
    <h2>{{ msg.split("").reverse().join("") }}</h2>
    <MouseData />
    <InfoBox />
    <BookList />
  </div>
  <FooterVue />
</template>

<script lang="ts">
import NavbarVue from "@/components/NavBar.vue";
import FooterVue from "@/components/FooterBar.vue";
import MouseData from "@/components/MouseAction.vue";
import InfoBox from "./components/InfoBox.vue";
import BookList from "./components/BookList.vue";
import { defineComponent } from "vue";

interface ComponentData {
  msg: string;
}

export default defineComponent({
  name: "App",
  components: { NavbarVue, FooterVue, MouseData, InfoBox, BookList },
  data(): ComponentData {
    return {
      msg: "Hello from Cologne",
    };
  },
});
</script>

<style>
.mainc {
  margin: 3em;
  padding-block: 3em;
  background-color: beige;
}
</style>
