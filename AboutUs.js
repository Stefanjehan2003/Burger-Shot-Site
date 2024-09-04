const modeToggleSwitch = document.getElementById('mode-toggle');
const bodyElement = document.body;

function updateIcon() {
    const slider = document.querySelector('.slider:before');
    if (bodyElement.classList.contains('night-mode')) {
        slider.style.backgroundImage = "url('images/moon.png')";
    } else {
        slider.style.backgroundImage = "url('images/sunny.png')";
    }
}

modeToggleSwitch.addEventListener('change', function() {
    bodyElement.classList.toggle('night-mode');
    updateIcon();
});

updateIcon();
