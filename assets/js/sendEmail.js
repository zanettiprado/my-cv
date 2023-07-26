function sendMail(contactForm) {
    emailjs.send("service_bpya8z7", "felipe", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
        .then(function (response) {
            console.log('SUCCESS!', response);
            alert("Email sent")
        }, function (error) {
            console.log('FAILED...', error);
            alert("Failed")
        });
    return false;
};

function sendMail(contactForm) {
    emailjs.send("service_bpya8z7", "felipe", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}