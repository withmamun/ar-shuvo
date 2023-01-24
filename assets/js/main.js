(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        //--------------- Email JS ---------------

        const contactForm = document.getElementById('contact-form'),
            contactName = document.getElementById('contact-name'),
            contactEmail = document.getElementById('contact-email'),
            contactProject = document.getElementById('contact-project'),
            contactMessage = document.getElementById('contact-message')

        const sendEmail = (e) => {
            e.preventDefault()
            // check if the field has value
            if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
                // Add and remove color
                contactMessage.classList.remove('color-green')
                contactMessage.classList.add('color-red')

                // show message
                contactMessage.textContent = 'Write all the input fields 📩'
            } else {
                // serviceID - templateID - #form - publicKey
                emailjs.sendForm('service_pi06ngc', 'template_v6k4yqn', '#contact-form', 'kQvgZRHdWgo5ybJBA')
                    .then(() => {
                        // Show message and add color
                        contactMessage.classList.add('color-green')
                        contactMessage.textContent = 'Message sent ✅'

                        // Remove message after five seconds

                        setTimeout(() => {
                            contactMessage.textContent = ''
                        }, 3000)

                    }, (error) => {
                        alert('OOPS! SOMETHING HAS FAILED...', error)
                    })
                // To clear the input field
                contactName.value = ''
                contactEmail.value = ''
                contactProject.value = ''
            }

        }
        contactForm.addEventListener('submit', sendEmail)




        //------------ Offcanvas -------------

        $('.menu-open , .offcanvas-overlay').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').addClass('active');

        });
        $('.menu-close , .offcanvas-overlay, .offcanvas-area .main-menu ul li a').click(function () {

            $('.offcanvas-area , .offcanvas-overlay').removeClass('active');

        });


        //------------ Testimonial slider -------------

        $('.testimonial__main__slider').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dot: true,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })




    }); //---document-ready-----

}(jQuery));