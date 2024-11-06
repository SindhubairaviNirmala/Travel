// script.js

// Show destination details
function showDetails(destination) {
    const details = {
        'Paris': 'Explore the Eiffel Tower and enjoy the beautiful cafes of Paris.',
        'Bali': 'Relax on the beaches and explore the temples of Bali.',
        'New York': 'Experience the iconic skyline and vibrant culture of New York.'
    };
    document.getElementById('destination-details').innerText = details[destination];
}

// Handle booking form submission
function bookTrip(event) {
    event.preventDefault();
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const people = document.getElementById('people').value;
    document.getElementById('booking-result').innerText = `Trip booked to ${destination} on ${date} for ${people} people.`;
}

// Add a review
function addReview() {
    const reviewText = prompt("Please enter your review:");
    if (reviewText) {
        const reviewList = document.getElementById('review-list');
        const reviewElement = document.createElement('p');
        reviewElement.innerText = reviewText;
        reviewList.appendChild(reviewElement);
    }
}

// Handle contact form submission
function submitContact(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    document.getElementById('contact-result').innerText = `Thank you, ${name}. We will contact you at ${email} soon.`;
}
