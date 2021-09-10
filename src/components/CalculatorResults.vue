<template>
  <div
    class="2xl:p-10 p-6 2xl:w-1/2 w-full bg-indigo-700 2xl:rounded-xl rounded-b-xl flex justify-between flex-col h-full"
  >
    <div>
      <div class="flex items-center justify-between 2xl:pb-14 pb-10">
        <div>
          <p class="text-white font-bold text-xl">Tip Amount</p>
          <p class="text-indigo-400 text-sm">/ person</p>
        </div>
        <div>
          <p class="font-bold text-6xl text-indigo-200">£{{ totalTipAmount.toFixed(2) }}</p>
        </div>
      </div>
      <div class="flex items-center justify-between 2xl:pb-0 pb-10">
        <div>
          <p class="text-white font-bold text-xl">Total</p>
          <p class="text-indigo-400 text-sm">/ person</p>
        </div>
        <div>
          <p class="font-bold text-6xl text-indigo-200">£{{ totalPerPerson.toFixed(2) }}</p>
        </div>
      </div>
    </div>
    <button
      class="w-full bg-indigo-200 text-indigo-600 uppercase rounded shadow py-4 2xl:text-4xl text-2xl font-bold"
      @click="resetForm"
    >
      Reset
    </button>
  </div>
</template>

<script>
export default {
  props: ["totalPerPerson", "totalTipAmount"],
  methods: {
    resetForm() {
      this.$emit("reset-form");
    },
  },
};
</script>
