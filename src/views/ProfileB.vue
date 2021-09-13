<template>
  <div class="mb-4"><RouterLink to="/b">&laquo; Back</RouterLink></div>
  <WithPerson :id="pageId" v-slot="{ person }">
    <PersonDetail v-if="person" :person="person" />
    <div v-else>Loading&hellip;</div>
  </WithPerson>
</template>

<script>
import PersonDetail from "@/components/PersonDetail";
import WithPerson from "@/components/WithPerson";

export default {
  components: { PersonDetail, WithPerson },
  computed: {
    pageId() {
      return this.$route.params.id;
    },
  },
};
</script>
