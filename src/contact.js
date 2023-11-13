const Contact = () => {
    const tabArea = document.querySelector("#tabArea");

    const contactTab = document.createElement('div');
    contactTab.classList.add('tab');
    contactTab.setAttribute('id', 'contact-tab');

    const title = document.createElement('h2');
    title.textContent = "Contact Us";

    const contactForm = document.createElement('form');

    const nameLabel = document.createElement('label');
    nameLabel.textContent = "Your Name:";
    const nameInput = document.createElement('input');
    nameInput.type = "text";
    nameInput.required = true;

    const emailLabel = document.createElement('label');
    emailLabel.textContent = "Your Email:";
    const emailInput = document.createElement('input');
    emailInput.type = "email";
    emailInput.required = true;

    const messageLabel = document.createElement('label');
    messageLabel.textContent = "Your Message:";
    const messageTextarea = document.createElement('textarea');
    messageTextarea.rows = 5;
    messageTextarea.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = "submit";
    submitButton.textContent = "Send Message";

    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);
    contactForm.appendChild(messageLabel);
    contactForm.appendChild(messageTextarea);
    contactForm.appendChild(submitButton);

    contactTab.appendChild(title);
    contactTab.appendChild(contactForm);

    tabArea.appendChild(contactTab);
};

export default Contact;
