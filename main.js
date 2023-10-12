console.log("js connected");
const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
const tab1 = document.getElementById("tab-1-content");
const tab2 = document.getElementById("tab-2-content");
const tab3 = document.getElementById("tab-3-content");

const showcase =  document.querySelector(".showcase-content");
const login =  document.querySelector(".login");
const btn =  document.querySelector("#signin");
const btn1 =  document.querySelector("#signin1");

//select tab content item
function selectItem(e) {
  removeBorder();
  removeAllTabs();
  //add border to current tab
  this.classList.add("tab-border");

  if (this.id === "tab-1") {
    tab1.style.display = "grid";
  } else if (this.id === "tab-2") {
    tab2.style.display = "grid";
  } else if (this.id === "tab-3") {
    tab3.style.display = "grid";
  }

  //or we can use a constant literal
  /**
   *
   * const tabitemscontent = documents.queryselector(`${this.id}-content`);
   *
   * tabitemscontent.classlist.add("show");
   *
   */
}

//remove border
function removeBorder(e) {
  //tabItems.forEach((item) => item.classList.remove("tab-border"));
  tabItems.forEach(function (item) {
    item.classList.remove("tab-border");
  });
}

//remove tabs
function removeAllTabs(e) {
  console.log("tabs");
  tab1.style.display = "none";
  tab2.style.display = "none";
  tab3.style.display = "none";
}

//Listen for tab click
tabItems.forEach((item) => item.addEventListener("click", selectItem));


//btn
btn.addEventListener("click", function togglepages(e){
  showcase.classList.toggle("hide");
  login.classList.toggle("hide");
});
//btn1
btn1.addEventListener("click", function togglepages(e){
  showcase.classList.toggle("hide");
  login.classList.toggle("hide");
});