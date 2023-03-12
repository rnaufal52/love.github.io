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

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openModalBtn = () => {
  openModal();
};
const openModalBtn1 = () => {
  const judul = document.querySelector("span");
  const text = "Bunga";
  judul.innerHTML = text;
  const p = document.querySelector("#text");
  const isi = "Bagus, emang harus milih bunga ayang tu.hahaha";
  p.innerHTML = isi;
  openModal();
};

// close modal
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

closeModalBtn.addEventListener("click", closeModal);
