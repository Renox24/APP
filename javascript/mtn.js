document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.maintenance-container');
    container.style.opacity = 1;
    container.style.transform = 'translateY(0)';
});

document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');

    // Function to check the time and redirect if necessary
    function checkTimeAndRedirect() {
        const now = new Date();
        const hours = now.getHours();

        if (hours >= 13 && hours < 16) {
            window.location.href = '../acceuil.html';
        } else {
            mainContent.style.opacity = 1;
            mainContent.style.transform = 'translateY(0)';
        }
    }

    // Check time when the page loads
    checkTimeAndRedirect();

    // Optionally, check time every minute
    setInterval(checkTimeAndRedirect, 60000);
});
