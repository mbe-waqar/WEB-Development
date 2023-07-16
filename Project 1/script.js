// // script.js

// // Add event listeners to "Get Product" links
// const getProductLinks = document.querySelectorAll('.get-product-link');
// getProductLinks.forEach(link => {
//     link.addEventListener('click', handleGetProductClick);
// });

// // Function to handle the "Get Product" link click event
// function handleGetProductClick(event) {
//     event.preventDefault(); // Prevent the default link behavior (navigation)

//     const productId = event.target.getAttribute('data-id');

//     const selectedProduct = products.find(product => product.id === productId);

//     if (selectedProduct) {
//         // Add the selected product to the cartItems array
//         cartItems.push(selectedProduct);
//         localStorage.setItem('products', JSON.stringify(cartItems));
//     }
// }
function trackProduct() {
    const trackingNumber = document.getElementById('input').value;
    const order = JSON.parse(localStorage.getItem('order'));

    if (order && order.trackingNumber === trackingNumber) {
        const trackingDetails = document.getElementById('trackingDetails');
        trackingDetails.innerHTML = `
                    <p>Name: ${order.name}</p>
                    <p>Card Number: ${order.cardNumber}</p>
                    <p>Card Type: ${order.cardType}</p>
                    <p>Expiry Date: ${order.expDate}</p>
                    <p>CVV: ${order.cvv}</p>
                    <p>Tracking Number: ${order.trackingNumber}</p>
                `;
    } else {
        const trackingDetails = document.getElementById('trackingDetails');
        trackingDetails.innerHTML = '<p>Invalid tracking number. Please try again.</p>';
    }
}
// Function to handle the form submission
function handleCheckoutSubmit(event) {
    event.preventDefault();

    // Get the input values
    const name = document.querySelector('input[name="name"]').value;
    const cardNumber = document.querySelector('input[name="card_number"]').value;
    const cardType = document.querySelector('select[name="card_type"]').value;
    const expDate = document.querySelector('input[name="exp_date"]').value;
    const cvv = document.querySelector('input[name="cvv"]').value;

    // Generate a random tracking number
    const trackingNumber = generateTrackingNumber();

    // Create an object to store the order details
    const order = {
        name,
        cardNumber,
        cardType,
        expDate,
        cvv,
        trackingNumber
    };

    // Store the order details in localStorage
    localStorage.setItem('order', JSON.stringify(order));

    // Display the message in a pop-up
    const message = `Your order has been placed with Tracking Number: ${trackingNumber}`;
    alert(message);
}

// Function to generate a random tracking number
function generateTrackingNumber() {
    const timestamp = Date.now().toString();
    const randomDigits = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    return `${timestamp}-${randomDigits}`;
}

// Event listener for form submission
const checkoutForm = document.getElementById('checkoutForm');
checkoutForm.addEventListener('submit', handleCheckoutSubmit);