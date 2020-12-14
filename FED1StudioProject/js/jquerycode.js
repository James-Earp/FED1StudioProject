jQuery(document).ready(function () {

    console.log("jQuery is working!");
});

$(function () {
    $(".thumb").on("click", function () {

        let imgSrc = $(this).attr("src");


        $("#lightbox-content").html('<img src="' + imgSrc + '" class="img-responsive" />');

        $("#lightbox-container").fadeIn(500);

        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);
        });


    });
});

function validateForm(event) {

    let controls = document.getElementsByClassName("form-control");


    let validationMessages = document.getElementsByClassName("invalid");



    let rxpEmail = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);



    if (controls['Name'].value.length == 0 || controls['Email'].value.length == 0 || controls['Subject'].value.length == 0 || controls['Message'].value.length == 0 || !rxpEmail.test(controls['Email'].value)) {

        event.preventDefault();


        if (controls['Name'].value.length == 0) {
            validationMessages['rfvName'].textContent = "Really? Use your damn name."
        }
        else {
            validationMessages['rfvName'].textContent = "";
        }
        if (controls['Email'].value.length == 0) {
            validationMessages['rfvEmail'].textContent = "Really? Use your damn Email."
        }
        else {
            validationMessages['rfvEmail'].textContent = "";
        }
        if (controls['Subject'].value.length == 0) {
            validationMessages['rfvSubject'].textContent = "Really? Put the damn subject."
        }
        else {
            validationMessages['rfvSubject'].textContent = "";
        }
        if (controls['Message'].value.length == 0) {
            validationMessages['rfvMessage'].textContent = "Really? Write the damn message."
        }
        else {
            validationMessages['rfvMessage'].textContent = "";
        }


        if (!rxpEmail.test(controls['Email'].value)) {
            validationMessages['rfvEmail'].textContent = "Oh my God. You are so stupid. Use a damn valid email.";
        }
        else {
            validationMessages['rfvEmail'].textContent = "";
        }

    }
}