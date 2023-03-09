const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert("All cells must be filled");
  } else {
    const formData = new FormData(event.currentTarget);
    console.log(event.currentTarget);
    const obj = {};

    formData.forEach((x, y) => {
      obj[y] = x;
    });

    event.currentTarget.reset()
    console.log(obj);
  }

}
