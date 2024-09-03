document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Simple validation (can be expanded)
    if (!name || !email || !phone || !date || !time || !guests) {
        alert('Please fill out all fields.');
        return;
    }

    // Display confirmation message
    document.getElementById('confirmation-message').textContent = `Thank you, ${name}! Your table for ${guests} has been booked for ${date} at ${time}.`;

    // Optionally, you could clear the form here
    document.getElementById('booking-form').reset();
});
