function toggleMenu() {
  document.getElementById("mobile-btn").classList.toggle("hide");
  document.getElementById("navigation").classList.toggle("show");
}

function toggleTheme() {
  document.body.classList.toggle("night");
  let themeValue = "day";
  if (document.body.classList.contains("night")) {
    themeValue = "night";
  }
  localStorage.setItem("theme", themeValue);
}

const sendEmail = () => {
  const fullName = document.getElementsByName("fullName")[0].value;
  const email = document.getElementsByName("email")[0].value;
  const phone = document.getElementsByName("phone")[0].value;
  const message = document.getElementsByName("message")[0].value;

  //full name
  const nameRegex = /^[a-zA-Z0-9_ .-]*$/g;
  const emailregex =
    /(?<=\s|^)([A-Za-z0-9]+[A-Za-z0-9.\-_]+)@[a-z]+\-?[a-z]+(\.[a-z]+)+/g;
  const phoneRegex = /^[0-9]*$/g;

  if (fullName.length === 0 || nameRegex.test(fullName) === false) {
    document.getElementById("error").innerHTML = "Invalid name";
  } else if (email.length === 0 || emailregex.test(email) === false) {
    document.getElementById("error").innerHTML = "Invalid email";
  } else if (phone.length === 0 || phoneRegex.test(phone) === false) {
    document.getElementById("error").innerHTML =
      "Invalid phone. Only numbers are allowed";
  } else if (message.length === 0) {
    document.getElementById("error").innerHTML = "Invalid message.";
  } else {
    document.getElementById("error").innerHTML = "";
    document.getElementById("contact-form").classList.add("hide");
    document.getElementById("congratulate").classList.remove("hide");
  }
  // email

  // phone

  // message
};

window.onload = () => {
  if (localStorage.getItem("theme") === "night") {
    document.body.classList.add("night");
  }
};
