// Initial data for the chart
const temperatureData = [20, 23, 15, 25, 30, 28, 18, 22, 10, 24, 27, 12, 16, 35, 11, 26, 19, 14, 17, 21, 29, 6, 8, 9, 7, 33, 31, 32, 34, 36];
const humidityData = [66, 53, 41, 68, 59, 46, 54, 61, 48, 70, 49, 62, 64, 55, 69, 45, 60, 42, 43, 67, 50, 63, 52, 58, 40, 57, 66, 65, 44, 47
];

const ctx = document.getElementById('chart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({length: 30}, (_, i) => `Day ${i + 1}`),
        datasets: [{
            label: 'Temperature (°C)',
            data: temperatureData,
            borderColor: 'red',
            fill: false,
            yAxisID: 'y1', // Use the left y-axis for temperature
        },
        {
            label: 'Humidity (%)',
            data: humidityData,
            borderColor: 'blue',
            fill: false,
            yAxisID: 'y2', // Use the right y-axis for humidity
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y1: {
                type: 'linear',
                position: 'left',
                beginAtZero: true,
                min: -20, // Imposta il valore minimo a -20
                max: 100, // Imposta il valore massimo a 100
                title: {
                    display: true,
                    text: 'Temperature (°C)',
                    color: 'red',
                },
                ticks: {
                    max: 100, // Imposta la temperatura massima
                    min: -20, // Imposta la temperatura minima
                },
                grid: {
                    color: '#ffffff', // Colore della griglia in modalità chiara per l'asse y sinistro
                },
            },
            y2: {
                type: 'linear',
                position: 'right',
                beginAtZero: true,
                min: -20, // Imposta il valore minimo a -20
                max: 100, // Imposta il valore massimo a 100
                title: {
                    display: true,
                    text: 'Humidity (%)',
                    color: 'blue',
                },
                ticks: {
                    max: 100, // Imposta l'umidità massima
                    min: -20, // Imposta l'umidità minima
                },
                grid: {
                    color: '#444444', // Colore della griglia in modalità scura per l'asse y destro
                },
            },
            x: {
                grid: {
                    color: '#ffffff' // Change the grid color in light mode
                }
            }
        }
    }
});

// Toggle between dark and light mode
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');

    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        chart.options.scales.x.grid.color = '#444444'; // Dark gray grid color in dark mode
        chart.canvas.parentNode.style.backgroundColor = '#343436'; // Dark gray background for the chart
        themeIcon.classList.remove('fa-sun'); // Change icon to moon
        themeIcon.classList.add('fa-moon');
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        chart.options.scales.x.grid.color = '#ffffff'; // White grid color in light mode
        chart.canvas.parentNode.style.backgroundColor = 'transparent'; // Default background for the chart
        themeIcon.classList.remove('fa-moon'); // Change icon to sun
        themeIcon.classList.add('fa-sun');
    }
    chart.update(); // Update the chart to reflect changes
}

// Mock function to simulate fetching temperature and humidity values
function fetchTemperatureAndHumidity() {
    const temperature = Math.floor(Math.random() * 10) + 20;
    const humidity = Math.floor(Math.random() * 10) + 40;

    document.getElementById('temperature').innerText = temperature;
    document.getElementById('humidity').innerText = humidity;
}

// Update temperature and humidity every 5 seconds
setInterval(fetchTemperatureAndHumidity, 5000);
