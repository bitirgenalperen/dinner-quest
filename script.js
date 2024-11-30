document.addEventListener('DOMContentLoaded', () => {
    // Animation elements
    const icons = ['utensilsIcon', 'wineIcon', 'heartIcon'];
    let currentIcon = 0;

    // Button elements
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const celebrationOverlay = document.getElementById('celebrationOverlay');
    const closeButton = document.querySelector('.close-button');

    // Animation cycle
    function cycleIcons() {
        document.getElementById(icons[currentIcon]).classList.add('active');
        
        // Remove active class from other icons
        icons.forEach((icon, index) => {
            if (index !== currentIcon) {
                document.getElementById(icon).classList.remove('active');
            }
        });

        currentIcon = (currentIcon + 1) % icons.length;
    }

    // Start animation cycle
    cycleIcons();
    setInterval(cycleIcons, 2000);

    // Move "No" button away from cursor
    noButton.addEventListener('mouseenter', () => {
        const contentRect = document.querySelector('.content').getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();
        
        const maxWidth = window.innerWidth - buttonRect.width;
        const maxHeight = window.innerHeight - buttonRect.height;
        
        let newX, newY;
        do {
            newX = Math.random() * maxWidth;
            newY = Math.random() * maxHeight;
        } while (
            newX < contentRect.right && 
            newX + buttonRect.width > contentRect.left && 
            newY < contentRect.bottom && 
            newY + buttonRect.height > contentRect.top
        );
        
        noButton.style.left = `${Math.max(0, newX)}px`;
        noButton.style.top = `${Math.max(0, newY)}px`;
    });

    // Show celebration overlay when "Yes" is clicked
    yesButton.addEventListener('click', () => {
        celebrationOverlay.classList.add('active');
    });

    // Hide celebration overlay when "Close" is clicked
    closeButton.addEventListener('click', () => {
        celebrationOverlay.classList.remove('active');
    });
});

