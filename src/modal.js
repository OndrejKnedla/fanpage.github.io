// Otevření modálního okna při načtení stránky
var modal = document.getElementById("myModal");
var modalBackdrop = document.getElementById("myModalBackdrop");

// Otevření modálního okna
window.addEventListener("load", function() {
  modal.classList.remove("hidden");
  modalBackdrop.classList.remove("hidden");
  document.body.classList.add("modal-open");
  document.body.style.overflow = "hidden"; // Zabránění scrollování pozadí
});

// Zavření modálního okna při kliknutí na křížek nebo pozadí
var closeModalBtn = document.getElementById("closeModalBtn");
modalBackdrop.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.add("hidden");
  modalBackdrop.classList.add("hidden");
  document.body.classList.remove("modal-open");
  document.body.style.overflow = ""; // Povolení scrollování pozadí
}

// Odeslání formuláře
var emailForm = document.getElementById("emailForm");
emailForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var emailInputValue = document.getElementById("emailInput").value;
  var privacyPolicyCheckbox = document.getElementById("privacyPolicyCheckbox");
  var subscribeCheckbox = document.getElementById("subscribeCheckbox");
  var errorText = document.getElementById("errorText");
  
  if (emailInputValue !== "" && privacyPolicyCheckbox.checked && subscribeCheckbox.checked) {
    console.log("E-mail:", emailInputValue);
    document.getElementById("popupEmail").textContent = emailInputValue;
    openSuccessPopup();
    closeModal();
    errorText.classList.add("hidden");
  } else {
    errorText.classList.remove("hidden");
  }
});

// Otevření úspěšného popupu
var successPopup = document.getElementById("successPopup");
var closePopupBtn = document.getElementById("closePopupBtn");

function openSuccessPopup() {
  successPopup.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Zabránění scrollování pozadí
}

// Zavření úspěšného popupu
closePopupBtn.addEventListener("click", function() {
  successPopup.classList.add("hidden");
  document.body.style.overflow = ""; // Povolení scrollování pozadí
});

