<template>
  <div class="mb-4"><RouterLink to="/c">&laquo; Back</RouterLink></div>
  <PersonDetail v-if="person" :person="person" />
  <div v-else>Loading&hellip;</div>
</template>

<script>
import PersonDetail from "@/components/PersonDetail";
import usePerson from "@/hooks/usePerson";
import { useRoute } from "vue-router";

export default {
  components: { PersonDetail },
  setup() {
    const route = useRoute();
    const { person } = usePerson(route.params.id);
    return { person };
  },
};
</script>
