function openModal(img) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  const modalPrompt = document.getElementById("modalPrompt");

  modalImg.src = img.src;
  modalPrompt.textContent = "Prompt: " + img.dataset.fullprompt;

  modal.style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}