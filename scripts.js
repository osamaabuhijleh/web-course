// Example JavaScript for Itinerary Planner
document.getElementById('itinerary-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const activities = document.getElementById('activities').value;

    const itineraryDisplay = document.getElementById('itinerary-display');
    itineraryDisplay.innerHTML = `
        <h3>Your Itinerary</h3>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Activities:</strong> ${activities}</p>
    `;
});

// Example JavaScript for Booking Form
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Booking Confirmed!');
});

// Example JavaScript for Contact Form
document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault();

    alert('Message Sent')
});

