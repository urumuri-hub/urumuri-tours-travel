
/* =================================
   URUMURI WEBSITE JAVASCRIPT
================================= */

// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navigation.classList.toggle("active");

        menuToggle.classList.toggle("menu-open", isOpen);

        menuToggle.setAttribute("aria-expanded", isOpen);

    });

    navigation.querySelectorAll("a").forEach(function(link) {

        link.addEventListener("click", function() {

            navigation.classList.remove("active");

            menuToggle.classList.remove("menu-open");

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


// AUTOMATIC COPYRIGHT YEAR

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// URUMURI BOOKING DATE VALIDATION

const travelDateInput = document.getElementById("travelDate");

if (travelDateInput) {

    const today = new Date();

    const localToday = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    travelDateInput.min = localToday;

}


// URUMURI NEWSLETTER FORM

const newsletterForm = document.getElementById("newsletterForm");
const newsletterMessage = document.getElementById("newsletterMessage");

if (newsletterForm && newsletterMessage) {

    newsletterForm.addEventListener("submit", function() {

        newsletterMessage.textContent =
            "Thank you for subscribing to URUMURI!";

    });

}
