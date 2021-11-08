/* ========================== § DOM ELEMENTS === */
const priceRangeEl = document.getElementById("price__range");
const priceTimespanEl = document.getElementById("timespan");
const monthlyBillingEl = document.getElementById("monthly-billing");
const yearlyBillingEl = document.getElementById("yearly-billing");

/* ========================== § DATA === */
const prices = {
  1: {
    pageviews: "10k",
    cost: 8,
  },
  2: {
    pageviews: "50k",
    cost: 12,
  },
  3: {
    pageviews: "100k",
    cost: 16,
  },
  4: {
    pageviews: "500k",
    cost: 24,
  },
  5: {
    pageviews: "1M",
    cost: 36,
  },
};

const price = class {
  constructor(option, discount) {
    this.option = option;
    this.discount = discount;
  }

  get pageviews() {
    return prices[this.option].pageviews;
  }

  get cost() {
    return this.discount ? prices[this.option].cost * 0.75 : prices[this.option].cost;
  }
};

/* ========================== § DISCOUNT CHECK === */
function discountCheck() {
  return yearlyBillingEl.checked;
}

/* ========================== § OFFER SELECTED === */
function offerSelected() {
  return priceRangeEl.value;
}

const offer = new price(offerSelected(), discountCheck());

/* ========================== § EVENT LISTENER SLIDER === */
priceRangeEl.addEventListener("input", function () {
  console.log(priceRangeEl.value);
});
