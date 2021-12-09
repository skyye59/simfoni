// This will perform a simple switch between the webform's login and signup options

const signupForm = document.querySelector(".signup-form");
const loginForm = document.querySelector(".login-form");
const signupBtn = document.querySelector(".signup-btn");
const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", () => {
  signupForm.setAttribute("hidden", "");
  loginForm.removeAttribute("hidden");
});

signupBtn.addEventListener("click", () => {
  loginForm.setAttribute("hidden", "");
  signupForm.removeAttribute("hidden");
});
