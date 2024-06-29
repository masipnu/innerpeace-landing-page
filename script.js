function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name: name,
    city: city,
    email: email,
    zipCode: zipCode,
    status: status,
  };
}

function isNumber(string) {
  return !isNaN(string);
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(formData) {
  if (!formData) return false;
  if (!isNumber(formData.zipCode)) return false;
  if (!checkboxIsChecked()) return false;
  return true;
}

function submit() {
  event.preventDefault();

  const formData = handleGetFormData();
  const isValid = validateFormData(formData);
  const warningDiv = document.getElementById("warning");
  if (!isValid) {
    warningDiv.textContent = "Periksa form anda sekali lagi";
  } else {
    warningDiv.textContent = "";
  }
}

const form = document.getElementById("myForm");
form.addEventListener("submit", submit);
