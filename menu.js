(() => {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.site-nav');
    const closeButton = nav ? nav.querySelector('.nav-close') : null;

    if (!toggle || !nav) {
        return;
    }

    const closeMenu = () => {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.removeEventListener('keydown', handleKeydown);
    };

    const handleKeydown = (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    };

    toggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        if (isOpen) {
            document.addEventListener('keydown', handleKeydown);
        } else {
            document.removeEventListener('keydown', handleKeydown);
        }
    });

    if (closeButton) {
        closeButton.addEventListener('click', closeMenu);
    }

    nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

})();
