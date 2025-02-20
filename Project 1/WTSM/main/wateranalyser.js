function analyzeWater() {
    const phLevel = document.getElementById('phLevel').value;
    const turbidity = document.getElementById('turbidity').value;
    const hardness = document.getElementById('hardness').value;

    const ctx = document.getElementById('waterChart').getContext('2d');
    const waterChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['pH Level', 'Turbidity (NTU)', 'Hardness (ppm)'],
            datasets: [{
                label: 'Water Quality',
                data: [phLevel, turbidity, hardness],
                backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
                borderColor: ['#388e3c', '#1976d2', '#f57c00'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    let quality = "Good";
    if (phLevel < 6.5 || phLevel > 8.5 || turbidity > 5 || hardness > 300) {
        quality = "Poor";
    }

    document.getElementById('result').innerText = `Water Quality: ${quality}`;
}
