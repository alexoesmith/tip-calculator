<template>
  <div>
    <CalculatorWrapper />
  </div>
</template>

<script>
import CalculatorWrapper from "./components/CalculatorWraper.vue";

export default {
  components: {
    CalculatorWrapper,
  },
  mounted() {
    document.title = "How Much Tip?";
  },
};
</script>
