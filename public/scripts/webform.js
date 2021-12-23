const signupWebForm = document.querySelector(".signup-form");
const loginWebForm = document.querySelector(".login-form");
const loginDiv = document.querySelector(".login-div");
const signupDiv = document.querySelector(".signup-div");
const loginSwitch = document.querySelector(".login-btn");
const signupSwitch = document.querySelector(".signup-btn");

console.log(signupWebForm, loginWebForm);

loginSwitch.addEventListener("click", () => {
  signupDiv.setAttribute("hidden", "");
  webForm = document.querySelector(".login-form");
  loginDiv.removeAttribute("hidden");
  console.log(webForm);
});

signupSwitch.addEventListener("click", () => {
  loginDiv.setAttribute("hidden", "");
  webForm = document.querySelector(".signup-form");
  signupDiv.removeAttribute("hidden");
  console.log(webForm);
});

//  Handle Signup POST Request

signupWebForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // reset errors
  // emailError.textContent = "";
  // passwordError.textContent = "";

  // get values
  const dial = webForm.dial.value;
  const fullName = webForm.fullName.value;
  const organization = webForm.oname.value;
  const email = webForm.email.value;
  const password = webForm.password.value;
  const phoneNumber = webForm.phoneNum.value;

  if (webForm.classList.contains("signup-form")) {
    try {
      const res = await fetch("/signup", {
        method: "POST",
        body: JSON.stringify({
          dial,
          fullName,
          organization,
          email,
          password,
          phoneNumber,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      if (data.errors) {
        // console.log(data.errors.email);
        // console.log(data.errors.password);
      }
      if (data.user) {
        location.assign("/home");
      }
    } catch (err) {
      console.log(err);
    }
  }
});

// Handle Login POST request
loginWebForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = webForm.email.value;
  const password = webForm.password.value;

  if (webForm.classList.contains("login-form")) {
    // reset errors
    // emailError.textContent = "";
    // passwordError.textContent = "";
    console.log("here");

    try {
      const res = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      if (data.errors) {
        // emailError.textContent = data.errors.email;
        // passwordError.textContent = data.errors.password;
      }
      if (data.user) {
        location.assign("/home");
      }
    } catch (err) {
      console.log(err);
    }
  }
});
