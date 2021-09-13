<template>
  <div class="mb-4"><RouterLink to="/a">&laquo; Back</RouterLink></div>
  <PersonDetail v-if="person" :person="person" />
  <div v-else>Loading&hellip;</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PersonDetail from "@/components/PersonDetail";

export default {
  components: { PersonDetail },
  computed: {
    ...mapGetters(["getPerson"]),
    pageId() {
      return this.$route.params.id;
    },
    person() {
      return this.getPerson(this.pageId);
    },
  },
  methods: {
    ...mapActions(["fetchPerson"]),
  },
  watch: {
    person: {
      async handler(newVal) {
        if (newVal || !this.pageId) {
          return;
        }
        try {
          await this.fetchPerson(this.pageId);
        } catch (e) {
          this.$router.replace("/a");
        }
      },
      immediate: true,
    },
  },
};
</script>
