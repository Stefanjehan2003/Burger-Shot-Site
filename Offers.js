const modeToggleButton = document.getElementById('mode-toggle');
const bodyElement = document.body;

modeToggleButton.addEventListener('click', function() {
    bodyElement.classList.toggle('night-mode');
    
    if (bodyElement.classList.contains('night-mode')) {
        modeToggleButton.textContent = 'Day Mode';
    } else {
        modeToggleButton.textContent = 'Night Mode';
    }
});
