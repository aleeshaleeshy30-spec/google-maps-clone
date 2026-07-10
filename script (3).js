let currentUser = null;
let map;

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    document.getElementById(section + '-section').classList.remove('hidden');
    if (section === 'map') initMap();
}

function initMap() {
    if (map) return;
    map = L.map('map').setView([24.8607, 67.0011], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([24.8607, 67.0011]).addTo(map).bindPopup("Karachi").openPopup();
}

function searchLocation() {
    const query = document.getElementById('search-input').value;
    if (query) {
        alert(`🔍 Searching for "${query}" on the map (Demo)`);
        if (map) {
            map.setView([24.8607, 67.0011], 13);
        }
    }
}

function getDirections() {
    const start = document.getElementById('start').value || "Karachi";
    const end = document.getElementById('end').value || "Lahore";
    document.getElementById('directions-result').innerHTML = `
        <p>Directions from <strong>${start}</strong> to <strong>${end}</strong></p>
        <p class="mt-4 text-emerald-600">Estimated time: 18 hours (Demo)</p>
    `;
}

function showLoginModal() {
    document.getElementById('login-modal').classList.remove('hidden');
    document.getElementById('login-modal').classList.add('flex');
}

function closeLoginModal() {
    const modal = document.getElementById('login-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function login() {
    currentUser = "Explorer";
    document.getElementById('login-btn').innerHTML = `👋 ${currentUser}`;
    closeLoginModal();
    alert("✅ Logged in successfully!");
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showSection('map');
});