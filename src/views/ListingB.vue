<template>
  <div>
    <BabyYoda class="mb-8 mx-auto" />
    <h1 class="font-bold mb-4 text-2xl text-center">
      Characters from Star Wars
    </h1>
    <WithPeople v-slot="{ hasFetchedAll, people }">
      <PeopleListing v-if="hasFetchedAll" :people="people" />
      <div v-else>Loading &hellip;</div>
    </WithPeople>
  </div>
</template>

<script>
import BabyYoda from "@/components/BabyYoda";
import PeopleListing from "@/components/PeopleListing";
import WithPeople from "@/components/WithPeople";

export default {
  components: { BabyYoda, PeopleListing, WithPeople },
};
</script>
