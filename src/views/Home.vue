<template>
  <div>
    <CalculatorWrapper>
      <template v-slot:logo>
        <Logo />
      </template>
    </CalculatorWrapper>
  </div>
</template>

<script>
import CalculatorWrapper from "../components/CalculatorWraper.vue";
import Logo from "../components/Logo.vue";
export default {
  components: {
    CalculatorWrapper,
    Logo,
  },
};
</script>
