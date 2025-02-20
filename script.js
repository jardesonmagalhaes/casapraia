let currentHouse = {};
let currentIndex = 0;

function openModal(index) {
    currentHouse = houses[index];
    currentIndex = 0;
    
    document.getElementById("modalTitle").innerText = currentHouse.name;
    document.getElementById("modalLocation").innerText = `📍 ${currentHouse.location}`;
    document.getElementById("modalPrice").innerText = `💰 ${currentHouse.price} por diária`;
    document.getElementById("modalRating").innerText = `⭐ ${currentHouse.rating}`;
    document.getElementById("modalImage").src = currentHouse.images[currentIndex];
    
    document.getElementById("contactButton").onclick = () => contactWhatsApp(currentHouse.name);
    
    document.getElementById("houseModal").style.display = "block";
}

function closeModal() {
    document.getElementById("houseModal").style.display = "none";
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + currentHouse.images.length) % currentHouse.images.length;
    document.getElementById("modalImage").src = currentHouse.images[currentIndex];
}

function contactWhatsApp(houseName) {
    const phoneNumber = "5588997263753";
    const message = `Olá, gostaria de mais informações sobre a ${houseName}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
