<template>
  <div class="2xl:p-10 p-6 2xl:w-1/2 w-full">
    <form class="flex flex-col space-y-10" @keyup="handleForm()">
      <div>
        <label for="bill" class="font-semibold text-gray-500 text-xl pb-2 block">Bill</label>
        <div class="relative flex items-center">
          <span class="text-indigo-700 absolute left-4"
            ><font-awesome-icon icon="pound-sign"
          /></span>
          <input
            id="bill"
            type="text"
            name="bill"
            class="rounded-lg text-right bg-indigo-50 text-indigo-700 font-bold text-xl w-full p-4"
            v-model="bill"
          />
        </div>
      </div>

      <div>
        <label for="bill" class="font-semibold text-gray-500 text-xl pb-2 block"
          >Select Tip %
        </label>
        <ul class="grid grid-cols-3 gap-4">
          <li
            v-for="(tip, index) in tips"
            :key="index"
            class="bg-indigo-700 text-white p-2 text-center font-bold text-xl rounded"
            @click="handleTip(tip), handleForm()"
          >
            {{ tip }}%
          </li>
          <li>
            <input
              type="text"
              placeholder="Custom"
              class="bg-indigo-50 p-2 rounded w-full h-full"
              v-model="tipAmount"
            />
          </li>
        </ul>
      </div>

      <div>
        <label for="numberOfPeople" class="font-semibold text-gray-500 text-xl pb-2 block"
          >Number of People</label
        >
        <div class="relative flex items-center">
          <span class="text-indigo-700 absolute left-4"><font-awesome-icon icon="user"/></span>
          <input
            id="numberOfPeople"
            type="text"
            name="numberOfPeople"
            class="rounded-lg text-right bg-indigo-50 text-indigo-700 font-bold text-xl w-full p-4"
            v-model="numberOfPeople"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bill: 0,
      tips: [5, 10, 15, 25, 50],
      tipAmount: 0,
      numberOfPeople: 0,
      totalTipAmount: 0,
    };
  },
  methods: {
    handleForm() {
      // Calculate Amounts
      let total = (this.bill * this.tipAmount) / this.numberOfPeople;
      this.totalTipAmount = total / 100;
      this.$emit("transferData", {
        totalTipAmount: this.totalTipAmount,
        numberOfPeople: this.numberOfPeople,
        bill: this.bill,
      });
    },
    handleTip(tip) {
      this.tipAmount = tip;
    },
  },
};
</script>
