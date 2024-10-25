function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function createBeehive() {
    const beehive = document.getElementById('beehive');
    beehive.innerHTML = ''; 

    const rowConfig = [4, 6, 6, 6];

    rowConfig.forEach((hexCount, rowIndex) => {
        const row = document.createElement('div');
        row.className = 'row';
        if (rowIndex % 2 !== 0) {
            row.classList.add('shifted');
        }
        for (let i = 0; i < hexCount; i++) {
            const hexagon = document.createElement('div');
            hexagon.className = 'hexagon';
            hexagon.style.backgroundColor = generateRandomColor();
            hexagon.style.animationDelay = `${(rowIndex * hexCount + i) * 0.1}s`;
            row.appendChild(hexagon);
        }
        beehive.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', createBeehive);

document.addEventListener('click', () => {
    document.querySelectorAll('.hexagon').forEach(hexagon => {
        hexagon.style.backgroundColor = generateRandomColor();
    });
});

window.addEventListener('resize', createBeehive);
