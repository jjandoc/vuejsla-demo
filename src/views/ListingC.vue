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
    <PeopleListing v-if="hasFetchedAll" :people="people" />
    <div v-else>Loading &hellip;</div>
  </div>
</template>

<script>
import PeopleListing from "@/components/PeopleListing";
import usePeople from "@/hooks/usePeople";

export default {
  components: { PeopleListing },
  setup() {
    const { hasFetchedAll, people } = usePeople();
    return { hasFetchedAll, people };
  },
};
</script>
