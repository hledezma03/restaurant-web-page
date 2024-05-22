function contactContent () {
    const info = document.createElement('div');
    info.innerHTML = `<h2 class="title-contact">Contact Us</h2>
    <p class="contact-text">We'd love to hear from you! If you have any questions, comments, or feedback, please don't hesitate to reach out to us.</p>
    <p class="title-section">Address</p>
    <p>123 Main Street
       City, State, Zip Code
    </p>
    <p class="title-section">Phone:</p>
    <p>(555) 123-4567</p>

    <p class="title-section">Email:</p>
    <p>info@restaurantname.com</p>

    <p class="title-section">Hours of Operation:</p>
    <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
    <p>Saturday - Sunday: 11:00 AM - 11:00 PM</p>`

    return info;
}

export {contactContent}