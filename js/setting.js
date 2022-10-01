let change = document.getElementById("change");
let email = document.getElementById("email");

change.onclick = (e) => {
  e.preventDefault();
  let disabled = true;
  if (email.getAttribute("disabled")) {
    email.removeAttribute("disabled");
    disabled = false;
  } else {
    email.setAttribute("disabled", "disabled");
    disabled = true;
  }
  window.localStorage.setItem("disabled", disabled);
};

if (localStorage.getItem("disabled") === true) {
  email.setAttribute("disabled", "disabled");
} else {
  email.removeAttribute("disabled");
}

let controls = document.querySelectorAll(".control");

controls.forEach((control) => {
  control.children[0].addEventListener("click", () => {
    if (control.children[0].getAttribute("checked") == "true") {
      control.children[0].removeAttribute("checked");
    } else {
      control.children[0].setAttribute("checked", "true");
    }
    localStorage.setItem(
      control.children[0].id,
      control.children[0].getAttribute("checked")
    );
  });
  control.children[0].setAttribute(
    "checked",
    localStorage.getItem(control.children[0].id)
  );
});

if (localStorage.getItem("quick_draft") == "null") {
  let el = document.querySelector("#quick_draft");
  el.removeAttribute("checked");
}
if (localStorage.getItem("yearly_targets") == "null") {
  let el = document.querySelector("#yearly_targets");
  el.removeAttribute("checked");
}
if (localStorage.getItem("tickets") == "null") {
  let el = document.querySelector("#tickets");
  el.removeAttribute("checked");
}
if (localStorage.getItem("news") == "null") {
  let el = document.querySelector("#news");
  el.removeAttribute("checked");
}
if (localStorage.getItem("tasks") == "null") {
  let el = document.querySelector("#tasks");
  el.removeAttribute("checked");
}
if (localStorage.getItem("search_items") == "null") {
  let el = document.querySelector("#search_items");
  el.removeAttribute("checked");
}
if (localStorage.getItem("uploads") == "null") {
  let el = document.querySelector("#uploads");
  el.removeAttribute("checked");
}
if (localStorage.getItem("project_progress") == "null") {
  let el = document.querySelector("#project_progress");
  el.removeAttribute("checked");
}
if (localStorage.getItem("reminders") == "null") {
  let el = document.querySelector("#reminders");
  el.removeAttribute("checked");
}
if (localStorage.getItem("post") == "null") {
  let el = document.querySelector("#post");
  el.removeAttribute("checked");
}
if (localStorage.getItem("social_media") == "null") {
  let el = document.querySelector("#social_media");
  el.removeAttribute("checked");
}
