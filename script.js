const menuItems = [
    // Coffee Section
    { code: "1a", name: "Americano", price: 120, category: "Coffee" },
    { code: "1b", name: "Cappuccino", price: 180, category: "Coffee" },
    { code: "1c", name: "Espresso", price: 150, category: "Coffee" },
    { code: "1d", name: "Latte", price: 160, category: "Coffee" },
    { code: "1e", name: "Mocha", price: 200, category: "Coffee" },
    { code: "1f", name: "Macchiato", price: 170, category: "Coffee" },
    { code: "1g", name: "Flat White", price: 180, category: "Coffee" },
    { code: "1h", name: "Irish Coffee", price: 250, category: "Coffee" },
    { code: "1i", name: "Cold Brew", price: 200, category: "Coffee" },
    { code: "1j", name: "Cortado", price: 190, category: "Coffee" },
  
    // Tea Section
    { code: "2a", name: "Black Tea", price: 80, category: "Tea" },
    { code: "2b", name: "Lemon Tea", price: 60, category: "Tea" },
    { code: "2c", name: "Herbal Tea", price: 100, category: "Tea" },
    { code: "2d", name: "Masala Chai", price: 70, category: "Tea" },
    { code: "2e", name: "Green Tea", price: 90, category: "Tea" },
    { code: "2f", name: "Chamomile Tea", price: 110, category: "Tea" },
    { code: "2g", name: "Mint Tea", price: 95, category: "Tea" },
    { code: "2h", name: "Ginger Tea", price: 85, category: "Tea" },
    { code: "2i", name: "Jasmine Tea", price: 120, category: "Tea" },
    { code: "2j", name: "Oolong Tea", price: 130, category: "Tea" },
  
    // Appetizers Section
    { code: "3a", name: "Grilled Cheese Sandwich", price: 150, category: "Appetizers" },
    { code: "3b", name: "Paneer Tikka Sandwich", price: 180, category: "Appetizers" },
    { code: "3c", name: "Mushroom Sandwich", price: 200, category: "Appetizers" },
    { code: "3d", name: "French Fries", price: 100, category: "Appetizers" },
    { code: "3e", name: "Onion Rings", price: 120, category: "Appetizers" },
    { code: "3f", name: "Spring Rolls", price: 130, category: "Appetizers" },
    { code: "3g", name: "Garlic Bread", price: 110, category: "Appetizers" },
    { code: "3h", name: "Cheese Nachos", price: 170, category: "Appetizers" },
    { code: "3i", name: "Vegetable Pakoras", price: 140, category: "Appetizers" },
    { code: "3j", name: "Chicken Wings", price: 220, category: "Appetizers" },
  
    // Ice Creams Section
    { code: "4a", name: "Vanilla Ice Cream", price: 100, category: "Ice Creams" },
    { code: "4b", name: "Chocolate Ice Cream", price: 120, category: "Ice Creams" },
    { code: "4c", name: "Strawberry Ice Cream", price: 110, category: "Ice Creams" },
    { code: "4d", name: "Butterscotch Ice Cream", price: 130, category: "Ice Creams" },
    { code: "4e", name: "Mint Chocolate Chip", price: 140, category: "Ice Creams" },
    { code: "4f", name: "Coffee Ice Cream", price: 150, category: "Ice Creams" },
    { code: "4g", name: "Pistachio Ice Cream", price: 160, category: "Ice Creams" },
    { code: "4h", name: "Mango Ice Cream", price: 180, category: "Ice Creams" },
    { code: "4i", name: "Caramel Ice Cream", price: 170, category: "Ice Creams" },
    { code: "4j", name: "Chocolate Fudge Ice Cream", price: 190, category: "Ice Creams" },
  
    // Shakes Section
    { code: "5a", name: "Vanilla Shake", price: 150, category: "Shakes" },
    { code: "5b", name: "Chocolate Shake", price: 180, category: "Shakes" },
    { code: "5c", name: "Strawberry Shake", price: 160, category: "Shakes" },
    { code: "5d", name: "Mango Shake", price: 170, category: "Shakes" },
    { code: "5e", name: "Oreo Shake", price: 200, category: "Shakes" },
    { code: "5f", name: "Banana Shake", price: 180, category: "Shakes" },
    { code: "5g", name: "Pineapple Shake", price: 190, category: "Shakes" },
    { code: "5h", name: "Peach Shake", price: 170, category: "Shakes" },
    { code: "5i", name: "Coffee Shake", price: 220, category: "Shakes" },
    { code: "5j", name: "Caramel Shake", price: 210, category: "Shakes" }
  ];
  
  let cart = [];
  
  function renderMenu() {
    const menuDiv = document.getElementById("menu");
    const categories = ["Coffee", "Tea", "Appetizers", "Ice Creams", "Shakes"];
  
    categories.forEach(category => {
      const categoryDiv = document.createElement("div");
      categoryDiv.className = "menu-category";
      categoryDiv.innerHTML = `<h2>${category}</h2>`;
  
      menuItems.filter(item => item.category === category).forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "menu-item";
        itemDiv.innerHTML = `
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
          <button onclick="addToCart('${item.code}')">Add to Cart</button>
        `;
        categoryDiv.appendChild(itemDiv);
      });
  
      menuDiv.appendChild(categoryDiv);
    });
  }
  
  function addToCart(code) {
    const item = menuItems.find(i => i.code === code);
    const existing = cart.find(i => i.code === code);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
  
    // Popup Message when item is added
    showPopup(`${item.name} added to cart!`);
  
    updateCart();
  }
  
  function showPopup(message) {
    const popup = document.createElement("div");
    popup.className = "popup-message";
    popup.innerText = message;
    document.body.appendChild(popup);
  
    // Remove popup after 2 seconds
    setTimeout(() => {
      popup.remove();
    }, 2000);
  }
  
  function updateCart() {
    const cartDiv = document.getElementById("cart");
    cartDiv.innerHTML = "";
    let total = 0;
  
    cart.forEach(item => {
      total += item.price * item.quantity;
      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.innerHTML = `
        <span>${item.name} x${item.quantity} - ₹${item.price * item.quantity}</span>
        <button onclick="removeFromCart('${item.code}')">Remove</button>
      `;
      cartDiv.appendChild(itemDiv);
    });
  
    document.getElementById("total").innerText = `Total: ₹${total}`;
  }
  
  function removeFromCart(code) {
    const index = cart.findIndex(i => i.code === code);
    if (index !== -1) {
      cart.splice(index, 1);
      updateCart();
    }
  }
  
  document.getElementById("order-form").addEventListener("submit", function (e) {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
  
    const name = document.getElementById("customerName").value;
    const payment = document.getElementById("paymentType").value;
    const summary = cart.map(item => `${item.name} x${item.quantity}`).join(", ");
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    alert(`Thank you, ${name}!\nYour order: ${summary}\nTotal: ₹${total}\nPayment: ${payment}`);
  
    cart = [];
    updateCart();
    document.getElementById("order-form").reset();
  });
  
  renderMenu();
  