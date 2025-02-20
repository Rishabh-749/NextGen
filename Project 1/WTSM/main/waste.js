function calculateWaste() {
    const organicWaste = document.getElementById('organicWaste').value;
    const recyclableWaste = document.getElementById('recyclableWaste').value;
    const nonRecyclableWaste = document.getElementById('nonRecyclableWaste').value;

    const ctx = document.getElementById('wasteChart').getContext('2d');
    const wasteChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Organic Waste', 'Recyclable Waste', 'Non-Recyclable Waste'],
            datasets: [{
                label: 'Waste Distribution (kg)',
                data: [organicWaste, recyclableWaste, nonRecyclableWaste],
                backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
                borderColor: ['#388e3c', '#1976d2', '#f57c00'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            const total = tooltipItem.dataset.data.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
                            const value = tooltipItem.raw;
                            const percentage = ((value / total) * 100).toFixed(2);
                            return `${tooltipItem.label}: ${value}kg (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });

    const totalWaste = Number(organicWaste) + Number(recyclableWaste) + Number(nonRecyclableWaste);
    document.getElementById('result').innerText = `Total Waste: ${totalWaste} liters`;
}
