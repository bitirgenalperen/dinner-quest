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
        const maxWidth = window.innerWidth - 150;
        const maxHeight = window.innerHeight - 60;
        
        const newX = Math.max(20, Math.random() * maxWidth);
        const newY = Math.max(20, Math.random() * maxHeight);
        
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
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

