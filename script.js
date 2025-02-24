const houses = [
    { name: "Villa Mar Cumbuco", location: "Cumbuco", price: 1200, rating: "10 (145 avaliações)", images: ["house1.jpg", "house2.jpg", "house3.jpg", "house4.jpg"] },
    { name: "Resort Beira-Mar", location: "Aquiraz", price: 1800, rating: "9.8 (110 avaliações)", images: ["house2.jpg", "house3.jpg", "house4.jpg", "house1.jpg"] },
    { name: "Paraíso Morro Branco", location: "Morro Branco", price: 950, rating: "9.5 (98 avaliações)", images: ["house3.jpg", "house4.jpg", "house1.jpg", "house2.jpg"] },
    { name: "Casa de Luxo", location: "Canoa Quebrada", price: 2300, rating: "10 (80 avaliações)", images: ["house4.jpg", "house1.jpg", "house3.jpg", "house2.jpg"] },
    { name: "Pousada Jericoacoara", location: "Jericoacoara", price: 850, rating: "9.3 (123 avaliações)", images: ["house1.jpg", "house3.jpg", "house2.jpg", "house4.jpg"] },
    { name: "Beach House", location: "Flecheiras", price: 1500, rating: "9.7 (120 avaliações)", images: ["house2.jpg", "house4.jpg", "house3.jpg", "house1.jpg"] }
  ];
  
  let currentHouse = {};
  let currentIndex = 0;
  
  function renderHouses(filteredHouses = houses) {
    const container = document.getElementById("housesContainer");
    container.innerHTML = filteredHouses.map((house, index) => `
      <div class="house" onclick="openModal(${index})">
        <img src="${house.images[0]}" alt="${house.name}">
        <div class="info">
          <h2>${house.name}</h2>
          <p><strong>Localização:</strong> ${house.location}</p>
          <p><strong>Preço:</strong> R$ ${house.price} por diária</p>
          <p><strong>Avaliação:</strong> ${house.rating}</p>
        </div>
      </div>
    `).join('');
  }
  
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
  
  document.addEventListener("DOMContentLoaded", () => {
    renderHouses();
  });
  