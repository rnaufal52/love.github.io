const btn = document.querySelector(".btn");
const flowers = document.querySelector(".flowers");

// animasi teks mengetik
const typingText = document.querySelector(".typing-text");
const text = "Sebagai Permintaan Maaf, Ayang pilih hadiah dibawah ini";
let index = 0;

function type() {
  typingText.innerHTML = text.slice(0, index);
  index++;

  if (index > text.length) {
    index = 0;
  }

  setTimeout(type, 150);
}

type();

// modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".btn-close");
const judul = document.querySelector("span");
const p = document.querySelector("#text");

// default text
const juduldefault = "Uang";
judul.textContent = juduldefault;
const pdefault =
  "Mohon maaf yang, uang sekarang lagi ngerantau jadi ayang pilih bunga ajo yo!";
p.textContent = pdefault;

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openModalBtn = () => {
  document.querySelector(".img").src = "assets/woried.gif";
  judul.textContent = juduldefault;
  p.textContent = pdefault;
  openModal();
};
const openModalBtn1 = () => {
  document.querySelector(".img").src = "assets/think.gif";
  judul.textContent = "Bunga";
  p.textContent = "Bagus, emang harus milih bunga ayang tu.hahaha";
  openModal();
};

// close modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
