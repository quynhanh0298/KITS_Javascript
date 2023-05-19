// const cancelButton = document.getElementById("cancel-btn");
// const savelButton = document.getElementById("save-btn");

// const inputFirstName = document.getElementById("first-name");
// const inputLastName = document.getElementById("last-name");
// const inputEmail = document.getElementById("email");
// const inputAddress = document.getElementById("address");
// const inputContactNumber = document.getElementById("contact-number");
// const inputs = document.getElementsByTagName("input");
// const settings = document.getElementById("settings");
// const sideBarChosenItem = document.getElementById("side-bar-chosen-item");
// const settingItems = document.getElementsByClassName("item-prop");

// cancelButton.onclick = () => {
//   inputs.innerHTML = "";
// };

// settings.onclick = () => {
//   sideBarChosenItem.style.display = "none";
// };

// settingItem.onclick = () => {
//   settingItems.style.color = "gray";
//   settingItem.style.fontFamily = "bold";
// };

const logoutBtn = document.getElementById("logout");
logoutBtn.onclick = () => {
  localStorage.clear();
  window.location.assign("login.html");
};
