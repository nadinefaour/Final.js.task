document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(form);
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });

        displaySuccessMessage();
        console.log(jsonData);  
    });
});

function displaySuccessMessage() {
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = "<p>Thank you for your message!</p>";
    responseDiv.innerHTML += "<p>We'll get back to you as soon as possible.</p>";

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
}
