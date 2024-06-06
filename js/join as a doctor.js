
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("doctorRegistrationForm");
    const alertSuccess = document.getElementById("alert-success");
    const closeBtns = document.querySelectorAll(".close-btn");
    const errorAlert = document.getElementById("errorAlert");
    const errorMessageDiv = document.querySelector(".error-message");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      
      // Clear previous alerts
      alertSuccess.classList.add("d-none");
      errorAlert.style.display = "none";
      errorMessageDiv.innerHTML = "";

      // Form validation
      let isValid = true;
      const fullName = document.getElementById("fullName").value.trim();
      const phoneNumber = document.getElementById("phoneNumber").value.trim();
      const emailAddress = document.getElementById("emailAddress").value.trim();
      const homeAddress = document.getElementById("homeAddress").value.trim();
      const specialization = document.getElementById("specialization").value.trim();
      const qualifications = document.getElementById("qualifications").value.trim();
      const licenseNumber = document.getElementById("licenseNumber").value.trim();
      const availability = document.getElementById("availability").value.trim();

      // Regex patterns
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      const phonePattern = /^[0-9]{10,15}$/;

      if (!fullName) {
        isValid = false;
        addErrorMessage("Full Name is required.");
      }

      if (!phoneNumber || !phonePattern.test(phoneNumber)) {
        isValid = false;
        addErrorMessage("A valid Phone Number is required. It should contain 10 to 15 digits.");
      }

      if (!emailAddress || !emailPattern.test(emailAddress)) {
        isValid = false;
        addErrorMessage("A valid Email Address is required.");
      }

      if (!homeAddress) {
        isValid = false;
        addErrorMessage("Home Address is required.");
      }

      if (!specialization) {
        isValid = false;
        addErrorMessage("Specialization is required.");
      }

      if (!qualifications) {
        isValid = false;
        addErrorMessage("Qualifications are required.");
      }

      if (!licenseNumber) {
        isValid = false;
        addErrorMessage("Medical License Number is required.");
      }

      if (!availability) {
        isValid = false;
        addErrorMessage("Availability is required.");
      }

      if (isValid) {
        alertSuccess.classList.remove("d-none");
        form.reset();
      } else {
        errorAlert.style.display = "block";
      }
    });

    closeBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        alertSuccess.classList.add("d-none");
        errorAlert.style.display = "none";
      });
    });

    function addErrorMessage(message) {
      const errorMsg = document.createElement("p");
      errorMsg.textContent = message;
      errorMessageDiv.appendChild(errorMsg);
    }
  });