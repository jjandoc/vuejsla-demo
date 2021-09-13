<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters(["getPerson"]),
    person() {
      return this.getPerson(this.id);
    },
  },
  methods: {
    ...mapActions(["fetchPerson"]),
  },
  watch: {
    person: {
      async handler(newVal) {
        if (newVal) return;
        try {
          await this.fetchPerson(this.id);
        } catch (e) {
          this.$router.replace("/b");
        }
      },
      immediate: true,
    },
  },
  render() {
    const { person } = this;
    return this.$slots.default({ person });
  },
};
</script>
