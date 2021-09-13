<template>
  <div>
    <div class="h-72 mb-8 mx-auto rounded-full overflow-hidden w-72">
      <img
        alt="Grogu"
        src="../assets/grogu.png"
        class="h-72 object-cover w-72"
      />
    </div>
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
import PeopleListing from "@/components/PeopleListing";
import WithPeople from "@/components/WithPeople";

export default {
  components: {
    PeopleListing,
    WithPeople,
  },
};
</script>
