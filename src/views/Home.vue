<template>
  <div>
    <BabyYoda class="mb-8 mx-auto" />
    <h1 class="font-bold mb-4 text-2xl text-center">
      Characters from Star Wars
    </h1>
    <ul class="pl-8 list-disc">
      <li><RouterLink to="/a">Example A - with Vuex</RouterLink></li>
      <li>
        <RouterLink to="/b"
          >Example B - with Vuex & Renderless Components</RouterLink
        >
      </li>
      <li><RouterLink to="/c">Example C - with Composition API</RouterLink></li>
    </ul>
  </div>
</template>

<script>
import BabyYoda from "@/components/BabyYoda";

export default {
  components: { BabyYoda },
};
</script>
