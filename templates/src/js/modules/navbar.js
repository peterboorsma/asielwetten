export function navbar() {
    ////////////////////////////////////////////////////
    // Toggle nav
    ////////////////////////////////////////////////////
    const toggleNavBtn = document.getElementById('toggleNavBtn');
    const navElement = document.getElementById('navElement');

    toggleNavBtn.addEventListener("click", function () {
        toggleNavBtn.classList.toggle("is-active");
        document.body.classList.toggle('nav-open');

        const isExpanded = toggleNavBtn.getAttribute('aria-expanded') === 'true';
        const newExpanded = !isExpanded;
        toggleNavBtn.setAttribute('aria-expanded', newExpanded);
        
        // Use the pre-translated strings from data attributes
        if (newExpanded) {
            toggleNavBtn.setAttribute('aria-label', toggleNavBtn.dataset.labelClose);
        } else {
            toggleNavBtn.setAttribute('aria-label', toggleNavBtn.dataset.labelOpen);
        }

        if (navElement.classList.contains("nav__navitems--closed")) {
            navElement.classList.remove("nav__navitems--closed");
            navElement.classList.add("nav__navitems--open");
        } else {
            navElement.classList.remove("nav__navitems--open");
            navElement.classList.add("nav__navitems--closed");
        }
    });
    
    ////////////////////////////////////////////////////
    // SHOW/HIDE NAVBAR ON SCROLL
    ////////////////////////////////////////////////////
    let prevScrollPos = window.scrollY;
    let debounceTimer;

    function handleScroll() {
        const currentScrollPos = window.scrollY;
        const navOptions = document.getElementById("navOptionsFx");

        // Add an offset before toggling the 'visible' and 'invisible' classes
        if (Math.abs(prevScrollPos - currentScrollPos) >= 50) {
            if (prevScrollPos > currentScrollPos) {
                // Toggle between 'visible' and 'invisible' classes to show the header
                navOptions.classList.remove("navoptions--hidden");
                navOptions.classList.add("navoptions--visible");
            } else {
                // Toggle between 'visible' and 'invisible' classes to hide the header
                navOptions.classList.remove("navoptions--visible");
                navOptions.classList.add("navoptions--hidden");
            }

            prevScrollPos = currentScrollPos;
        }
    }

    window.addEventListener("scroll", function () {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(handleScroll, 100);
    });
    




}
