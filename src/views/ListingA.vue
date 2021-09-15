<template>
  <div>
    <BabyYoda class="mb-8 mx-auto" />
    <h1 class="font-bold mb-4 text-2xl text-center">
      Characters from Star Wars
    </h1>
    <PeopleListing v-if="hasFetchedAll" :people="people" />
    <div v-else>Loading &hellip;</div>
  </div>
</template>

<script>
import BabyYoda from "@/components/BabyYoda";
import PeopleListing from "@/components/PeopleListing";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  components: { BabyYoda, PeopleListing },
  computed: {
    ...mapGetters(["people"]),
    ...mapState(["hasFetchedAll"]),
  },
  created() {
    if (this.hasFetchedAll) return;
    this.fetchPeople();
  },
  methods: {
    ...mapActions(["fetchPeople"]),
  },
};
</script>
