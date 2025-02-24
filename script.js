function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function randomMeme() {
    const memes = document.querySelectorAll(".gallery img");
    const randomIndex = Math.floor(Math.random() * memes.length);
    openModal(memes[randomIndex]);
}