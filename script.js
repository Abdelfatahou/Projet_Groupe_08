// Fichier: script.js

// Fonctionnalité : Mode Nuit / Mode Jour
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    // 1. Vérifier si le mode sombre est déjà actif (dans le stockage local)
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        body.classList.add('dark-mode');
        toggleButton.textContent = 'Mode Jour ☀️';
    }

    // 2. Écouter le clic sur le bouton
    toggleButton.addEventListener('click', () => {
        // Basculer la classe CSS
        body.classList.toggle('dark-mode');

        // Mettre à jour le texte du bouton et le stockage local
        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Mode Jour ☀️';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            toggleButton.textContent = 'Mode Nuit 🌙';
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});