let count = document.getElementById("count"),
  textarea = document.getElementById("textarea"),
  maxLength = textarea.getAttribute("maxlength");

textarea.oninput = function () {
  count.innerHTML = maxLength - this.value.length;
  if (count.innerHTML == 0) {
    count.classList.add("c-red");
  } else {
    count.classList.remove("c-red");
  }
};

let deleteBtn = document.querySelectorAll(".tasks .delete");

deleteBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.parentElement.classList.contains("done")) {
      btn.parentElement.classList.remove("done");
    } else {
      btn.parentElement.classList.add("done");
    }
  });
});

if (localStorage.getItem("quick_draft") == "null") {
  let el = document.querySelector(".quick-draft");
  el.remove();
}
if (localStorage.getItem("yearly_targets") == "null") {
  let el = document.querySelector(".yearly-targets");
  el.remove();
}
if (localStorage.getItem("tickets") == "null") {
  let el = document.querySelector(".tickets");
  el.remove();
}
if (localStorage.getItem("news") == "null") {
  let el = document.querySelector(".latest-news");
  el.remove();
}
if (localStorage.getItem("tasks") == "null") {
  let el = document.querySelector(".tasks");
  el.remove();
}
if (localStorage.getItem("search_items") == "null") {
  let el = document.querySelector(".search-items");
  el.remove();
}
if (localStorage.getItem("uploads") == "null") {
  let el = document.querySelector(".latest-upload");
  el.remove();
}
if (localStorage.getItem("project_progress") == "null") {
  let el = document.querySelector(".last-project");
  el.remove();
}
if (localStorage.getItem("reminders") == "null") {
  let el = document.querySelector(".reminders");
  el.remove();
}
if (localStorage.getItem("post") == "null") {
  let el = document.querySelector(".latest-post");
  el.remove();
}
if (localStorage.getItem("social_media") == "null") {
  let el = document.querySelector(".social-media");
  el.remove();
}
