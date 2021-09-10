<template>
  <div class="2xl:p-8 p-6 2xl:w-1/2 w-full">
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
            class="rounded-lg text-right bg-indigo-50 text-indigo-700 font-bold text-xl w-full p-4 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            v-model="bill"
            data-lpignore="true"
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
            class="bg-indigo-700 text-white py-4 text-center font-bold text-xl rounded cursor-pointer hover:bg-indigo-500"
            @click="handleTip(tip), handleForm()"
          >
            {{ tip }}%
          </li>
          <li>
            <input
              type="text"
              placeholder="Custom"
              class="bg-indigo-50 p-2 rounded w-full h-full focus:outline-none focus:ring-2 focus:ring-indigo-700"
              v-model="tipAmount"
              data-lpignore="true"
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
            class="rounded-lg text-right bg-indigo-50 text-indigo-700 font-bold text-xl w-full p-4 focus:outline-none focus:ring-2 focus:ring-indigo-700"
            v-model="numberOfPeople"
            data-lpignore="true"
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
      bill: null,
      tips: [5, 10, 15, 25, 50],
      tipAmount: null,
      numberOfPeople: null,
      totalTipAmount: 0,
      totalAmount: 0,
    };
  },
  methods: {
    handleForm() {
      this.totalTipAmount = (this.bill * this.tipAmount) / this.numberOfPeople / 100;
      this.totalAmount = this.totalTipAmount + this.bill / this.numberOfPeople;
      this.$emit("transferData", {
        totalTipAmount: this.totalTipAmount,
        totalAmount: this.totalAmount,
        bill: this.bill,
      });
    },
    handleTip(tip) {
      this.tipAmount = tip;
    },
  },
  mounted() {
    this.emitter.on("resetForm", () => {
      this.bill = null;
      this.numberOfPeople = null;
      this.tipAmount = null;
    });
  },
};
</script>
