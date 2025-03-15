// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousels with specific settings
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        new bootstrap.Carousel(carousel, {
            interval: 5000,
            wrap: true,
            keyboard: true
        });
    });

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll for elements with 'animate' class
    const animateElements = document.querySelectorAll('.animate');

    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;

        animateElements.forEach(element => {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = elementTopPosition + elementHeight;

            // Check if element is in view
            if (
                (elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition)
            ) {
                element.classList.add('animated');
            }
        });
    }

    // Initial check on page load
    checkIfInView();

    // Check on scroll
    window.addEventListener('scroll', checkIfInView);
});
