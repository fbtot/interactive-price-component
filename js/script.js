/* ========================== § DOM ELEMENTS === */
const toggleLeftEl = document.getElementById("monthly-billing");
const toggleRightEl = document.getElementById("yearly-billing");
const toggleElAr = [toggleLeftEl, toggleRightEl];

/* ========================== § TOGGLE TIMESPAN FUNCTIONALITY === */
toggleElAr.addEventListener("click", function (e) {
  if (toggleLeftEl.checked) {
    toggleLeftEl.checked = false;
  } else {
    toggleLeftEl.checked = true;
  }
});
