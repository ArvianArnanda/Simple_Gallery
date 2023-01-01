let modal = document.querySelector(".modal");
let modalImage = document.querySelector(".modal-image");

function display(type) {
    modalImage.src = `./assets/${type}.jpg`;
    let modalTitle = document.querySelector('.modal-title');
    modalTitle.innerHTML = `${type}`;
    let modalText = document.querySelector('.modal-text');
    modalText.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. This ${type} Sint quibusdam molestiae sit! Minima temporibus modi hic
    eveniet rerum officiis optio odit. Expedita aspernatur perferendis delectus nulla, aperiam quod fugit facere
    blanditiis voluptates, repudiandae est totam ducimus animi commodi ad. Eum?`;
}

function showModal(type) {
    modal.classList.remove("hidden");
    display(type);
}

function closeModal() {
    modal.classList.add("hidden");
}