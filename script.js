document.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.getElementById("orderForm");

    orderForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = event.target.name.value;
        const email = event.target.email.value;
        const product = event.target.product.value;
        const quantity = event.target.quantity.value;
        const address = event.target.address.value;

        console.log(`Order placed by ${name} for ${quantity} units of ${product} to be shipped to ${address}.`);

        alert("Order placed successfully!");

        orderForm.reset();
    });
});
