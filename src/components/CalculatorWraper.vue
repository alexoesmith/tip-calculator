<template>
  <div
    class="flex items-center justify-center 2xl:h-screen py-20 h-auto flex-col 2xl:max-w-[1440px] m-auto max-w-[375px]"
  >
    <slot name="logo"></slot>
    <div
      class="bg-white 2xl:p-10 p-0 rounded-xl w-full flex 2xl:flex-row flex-col 2xl:space-x-10 2xl:space-y-0 space-y-4"
    >
      <CalculatorForm v-on:transferData="setAmounts($event)" />
      <CalculatorResults :totalTipAmount="totalTipAmount" :totalPerPerson="totalPerPerson" />
    </div>
  </div>
</template>

<script>
import CalculatorForm from "../components/CalculatorForm.vue";
import CalculatorResults from "../components/CalculatorResults.vue";

export default {
  components: {
    CalculatorForm,
    CalculatorResults,
  },
  data() {
    return {
      totalTipAmount: 0,
      totalPerPerson: 0,
    };
  },
  methods: {
    setAmounts(amounts) {
      this.totalTipAmount = amounts.totalTipAmount;
      this.totalPerPerson = amounts.totalTipAmount + amounts.bill / amounts.numberOfPeople;
    },
  },
};
</script>
