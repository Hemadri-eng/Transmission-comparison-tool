// Highlight rows based on filter
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const table = document.getElementById('comparison-table');
const rows = table.querySelectorAll('tbody tr');

checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
        rows.forEach(row => row.classList.remove('highlight'));
        checkboxes.forEach(filter => {
            if (filter.checked) {
                const feature = filter.id;
                const row = table.querySelector(`tr[data-feature="${feature}"]`);
                if (row) {
                    row.classList.add('highlight');
                }
            }
        });
    });
});

// Toggle profile details
function toggleProfile(profileId) {
    const profileElement = document.getElementById(profileId);
    if (profileElement) {
        profileElement.classList.toggle('hidden');
    }
}

// Chart.js: Speed Comparison
const ctx = document.getElementById('speedChart').getContext('2d');
const speedChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Fiber Optic', 'Ethernet', 'Wi-Fi 6', '5G', 'Bluetooth'],
        datasets: [{
            label: 'Max Speed (Gbps)',
            data: [100, 10, 9.6, 10, 2],
            backgroundColor: ['#4caf50', '#2196f3', '#ff9800', '#9c27b0', '#f44336']
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
