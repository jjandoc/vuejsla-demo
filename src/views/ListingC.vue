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
import usePeople from "@/hooks/usePeople";

export default {
  components: { BabyYoda, PeopleListing },
  setup() {
    const { hasFetchedAll, people } = usePeople();
    const myFunc = () => {};
    return { hasFetchedAll, myFunc, people };
  },
};
</script>
