const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Time Circuits" },
  { id: "ac-2000", name: "Low Voltage Reactor" },
  { id: "jj-1969", name: "Warp Equalizer" },
];

// Populate the product dropdown dynamically
document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("productName");
  const lastModifiedElement = document.getElementById("lastModified");

  // Check if the product select element exists
  if (productSelect) {
      products.forEach(product => {
          const option = document.createElement("option");
          option.value = product.id;
          option.textContent = product.name;
          productSelect.appendChild(option);
      });
  } else {
      console.error("Product select element not found.");
  }

  // Update the last modified footer date
  if (lastModifiedElement) {
      lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
  } else {
      console.error("Last modified element not found.");
  }
});
  
    