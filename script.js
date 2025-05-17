async function fetchAnimals() {
  // You already defined `animals` above directly
  // Remove fetch code
  const animals = [
    {
      category: "Cow",
      id: 1,
      image_url: "image/Brahman Bull.jpg",
      name: "Brahman Bull",
      description:
        "A muscular, hump-backed bull with loose skin, adapted for hot climates. Used for breeding, meat, and farm work.",
      price: "৳3,50,000",
      in_cart: false,
    },
    {
      category: "Cow",
      id: 2,
      image_url: "image/Limousin Cattle.jpg",
      name: "Limousin Cattle",
      description:
        "A French beef breed with a muscular build, reddish-brown coat, and excellent meat quality.",
      price: "৳4,50,000",
      in_cart: false,
    },
    {
      category: "Cow",
      id: 3,
      image_url: "image/Holstein Cow.jpg",
      name: "Holstein Cow",
      description:
        "A black-and-white dairy cow known for high milk production. Commonly used in commercial dairy farming.",
      price: "৳2,50,000",
      in_cart: false,
    },
    {
      category: "Cow",
      id: 4,
      image_url: "image/Sahiwal Cow.jpg",
      name: "Sahiwal Cow",
      description:
        "A hardy, reddish-brown dairy cow with high milk yield. Well-suited for tropical climates.",
      price: "৳3,00,000",
      in_cart: false,
    },
    {
      category: "Cow",
      id: 5,
      image_url: "image/British White.jpg",
      name: "British White",
      description:
        "A hardy, naturally polled white cow used for both meat and milk production.",
      price: "৳3,75,000",
      in_cart: false,
    },
    {
      category: "Cow",
      id: 6,
      image_url: "image/Murray Grey.jpg",
      name: "Murray Grey",
      description:
        "A muscular, silver-gray beef cattle breed known for quality meat and adaptability.",
      price: "৳3,25,000",
      in_cart: false,
    },
    {
      category: "Goat",
      id: 7,
      image_url: "image/Angora Goat.jpg",
      name: "Angora Goat",
      description:
        "A long-haired, horned goat prized for its fine mohair fleece. Used for fiber production.",
      price: "৳45,000",
      in_cart: false,
    },
    {
      category: "Goat",
      id: 8,
      image_url: "image/16lakh.jpg",
      name: "16lakh Goat",
      description: "It’s a royal goat, called Goat Father of the Goats.",
      price: "৳16,00,000",
      in_cart: false,
    },
    {
      category: "Goat",
      id: 9,
      image_url: "image/Boer Goat.jpg",
      name: "Boer Goat",
      description:
        "A hardy, fast-growing meat goat with a white body and reddish-brown head. Known for excellent adaptability.",
      price: "৳60,000",
      in_cart: false,
    },
    {
      category: "Goat",
      id: 10,
      image_url: "image/Saanen Goat.jpg",
      name: "Saanen Goat",
      description:
        "A Swiss dairy breed known for high milk production, white coat, and adaptability.",
      price: "৳50,000",
      in_cart: false,
    },
    {
      category: "Goat",
      id: 11,
      image_url: "image/Nubian Ibex.jpg",
      name: "Nubian Ibex",
      description:
        "A desert-dwelling wild goat with large, curved horns, known for agility in rocky terrain.",
      price: "৳12,00,000",
      in_cart: false,
    },
    {
      category: "Buffalo",
      id: 12,
      image_url: "image/Water Buffalo.jpg",
      name: "Water Buffalo",
      description:
        "A hardy, domesticated bovine used for farming, milk, and meat. Strong, adaptable, and thrives in wet environments. Gentle temperament.",
      price: "৳3,25,000",
      in_cart: false,
    },
    {
      category: "Sheep",
      id: 13,
      image_url: "image/Churra Sheep.jpg",
      name: "Churra Sheep",
      description:
        "An ancient Iberian breed known for coarse wool, milk, and meat. Originates from Spain and Portugal.",
      price: "৳28,000",
      in_cart: false,
    },
    {
      category: "Sheep",
      id: 14,
      image_url: "image/Hebridean Sheep.jpg",
      name: "Hebridean Sheep",
      description:
        "A small, hardy black sheep with multiple horns, known for conservation grazing and wool production.",
      price: "৳35,000",
      in_cart: false,
    },
    {
      category: "Sheep",
      id: 15,
      image_url: "image/Lincoln Sheep.jpg",
      name: "Lincoln Sheep",
      description:
        "A large British breed with long, lustrous wool, known for its heavy fleece and sturdy build.",
      price: "৳45,000",
      in_cart: false,
    },
    {
      category: "Sheep",
      id: 16,
      image_url: "image/Boreray Sheep.jpg",
      name: "Boreray Sheep",
      description:
        "A rare, hardy Scottish breed with short tails, used for conservation grazing and wool.",
      price: "৳33,000",
      in_cart: false,
    },
    {
      category: "Camel",
      id: 17,
      image_url: "image/Dromedary Camel.jpg",
      name: "Dromedary Camel",
      description:
        "A tough, single-humped camel built for desert survival. Used for transport, milk, and meat.",
      price: "৳6,00,000",
      in_cart: false,
    },
    {
      category: "Camel",
      id: 18,
      image_url: "image/Bactrian Camel.jpg",
      name: "Bactrian Camel",
      description:
        "A hardy, two-humped camel built for cold deserts. Used for transport, wool, milk, and meat.",
      price: "৳9,00,000",
      in_cart: false,
    },
  ];

  // Group animals by category
  const categories = {};
  animals.forEach((animal) => {
    if (!categories[animal.category]) {
      categories[animal.category] = [];
    }
    categories[animal.category].push(animal);
  });

  const container = document.getElementById("animal-container");
  container.innerHTML = "";

  // Create DOM for each category
  Object.keys(categories).forEach((category) => {
    const section = document.createElement("div");
    section.classList.add("category-section");
    section.setAttribute("id", category.toLowerCase());

    const title = document.createElement("div");
    title.classList.add("category-title");
    title.textContent = category;

    const list = document.createElement("div");
    list.classList.add("animal-list");

    categories[category].forEach((animal) => {
      const card = document.createElement("div");
      card.classList.add("animal-card");
      card.setAttribute("data-id", animal.id);

      card.innerHTML = `
        <img src="${animal.image_url}" alt="${animal.name}" />
        <div class="animal-description">${animal.description}</div>
        <h3>${animal.name}</h3>
        <div class="card-buttons">
          <button class="price-button" data-price="${animal.price}">${animal.price}</button>
          <button class="view-button">View</button>
        </div>
      `;

      card
        .querySelector(".view-button")
        .addEventListener("click", () => openModal(animal));

      list.appendChild(card);
    });

    section.appendChild(title);
    section.appendChild(list);
    container.appendChild(section);
  });
}

function openModal(animal) {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-content");
  const navbar = document.getElementById("navbar");

  modalContent.innerHTML = `
    <span id="close-modal">&times;</span>
    <img src="${animal.image_url}" alt="${animal.name}" />
    <h2>${animal.name}</h2>
    <p>${animal.description}</p>
    <strong>${animal.price}</strong>
  `;

  modal.style.display = "flex";
  navbar.classList.add("navbar-dimmed");

  // Close modal
  document.getElementById("close-modal").onclick = () => {
    modal.style.display = "none";
    navbar.classList.remove("navbar-dimmed");
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      navbar.classList.remove("navbar-dimmed");
    }
  };
}

// Run on page load
document.addEventListener("DOMContentLoaded", fetchAnimals);

/*----------------------------------------------------------------------*/
// Navbar scroll behavior
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
      if (document.documentElement.classList.contains("dark")) {
        navbar.classList.add("dark");
      }
    } else {
      navbar.classList.remove("scrolled", "dark");
    }
  });
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/*----------------------------------------------------------------------*/
// Slider functionality
document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};

document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};

/*----------------------------------------------------------------------*/
// Cart sidebar functionality
document.addEventListener("DOMContentLoaded", function () {
  const cartBtn = document.querySelector(
    '.nav-links li a[href="#cart-overlay"]'
  );
  const cartSidebar = document.getElementById("cart-sidebar");
  const cartOverlay = document.getElementById("cart-overlay");
  const body = document.body;

  cartBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const isOpen = cartSidebar.classList.contains("open");
    cartSidebar.classList.toggle("open", !isOpen);
    cartOverlay.classList.toggle("show", !isOpen);
    body.classList.toggle("cart-open", !isOpen);
  });

  cartOverlay.addEventListener("click", function () {
    cartSidebar.classList.remove("open");
    cartOverlay.classList.remove("show");
    body.classList.remove("cart-open");
  });
});

/*----------------------------------------------------------------------*/
// Cart functionality
let cart = [];

function renderCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalContainer = document.getElementById("cart-total");
  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    cartTotalContainer.innerHTML = "";
    return;
  }

  cart.forEach((item) => {
    total += item.price * item.quantity;
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="cart-item-main">
        <img src="${item.image_url}" alt="${item.name}">
        <span style="font-weight:bold; flex:1;">${item.name}</span>
        <span>৳${item.price.toLocaleString()}</span>
        <button class="cart-qty" data-id="${
          item.id
        }" data-action="decrease">-</button>
        <span>${item.quantity}</span>
        <button class="cart-qty" data-id="${
          item.id
        }" data-action="increase">+</button>
      </div>
      <div class="cart-item-remove">
        <button class="cart-remove" data-id="${item.id}">Remove</button>
      </div>
    `;
    cartItemsContainer.appendChild(li);
  });

  cartTotalContainer.innerHTML = `<strong>Total: ৳${total.toLocaleString()}</strong>`;
}

// Add to cart handler
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("price-button")) {
    const card = e.target.closest(".animal-card");
    const id = card.dataset.id;
    const name = card.querySelector("h3").textContent;
    // Remove non-numeric characters for price
    const price = parseInt(e.target.dataset.price.replace(/[^0-9]/g, ""));
    const image_url = card.querySelector("img").src;

    const existing = cart.find((item) => String(item.id) === String(id));
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ id, name, price, image_url, quantity: 1 });
    }
    renderCart();

    // Open cart sidebar when item is added
    document.getElementById("cart-sidebar").classList.add("open");
    document.getElementById("cart-overlay").classList.add("show");
    document.body.classList.add("cart-open");
  }

  // Quantity change
  if (e.target.classList.contains("cart-qty")) {
    const id = e.target.dataset.id;
    const action = e.target.dataset.action;
    const item = cart.find((i) => String(i.id) === String(id));
    if (item) {
      if (action === "increase") item.quantity += 1;
      if (action === "decrease" && item.quantity > 1) item.quantity -= 1;
      renderCart();
    }
  }

  // Remove item
  if (e.target.classList.contains("cart-remove")) {
    const id = e.target.dataset.id;
    cart = cart.filter((i) => String(i.id) !== String(id));
    renderCart();
  }
});

// Initial render
renderCart();
