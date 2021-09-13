<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
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
  render() {
    const { hasFetchedAll, people } = this;
    return this.$slots.default({ hasFetchedAll, people });
  },
};
</script>
