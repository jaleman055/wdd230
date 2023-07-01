// Display current date
document.getElementById('date').innerText = new Date().toDateString();

// Display copyright year and last modification date
document.getElementById('footerText').innerText = `Copyright ${new Date().getFullYear()} Point of the Mountain Chamber - WDD 230 Project - Julio Aleman - Last Modified: ${document.lastModified}`;

// Toggle the navigation menu
document.getElementById('menuBtn').addEventListener('click', function() {
    let menu = document.getElementById('menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
});

// Display banner on Mondays and Tuesdays
let currentDate = new Date();
let currentDay = currentDate.getDay(); // getDay() returns a number between 0 (Sunday) and 6 (Saturday)

if (currentDay === 1 || currentDay === 2) { // 1 is Monday, 2 is Tuesday
    document.getElementById('banner').style.display = "block"; // display banner
} else {
    document.getElementById('banner').style.display = "none"; // hide banner
}

// companies.json

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

fetch('companies.json')
    .then(response => response.json())
    .then(data => {
        shuffleArray(data.companies);

        for (let i = 0; i < 3; i++) {
            const spotlight = document.querySelector(`.spotlight${i+1}`);
            const company = data.companies[i];

            spotlight.innerHTML += `<p><strong>Our top members:</strong> ${company.name} - <strong>Website:</strong> <a href="${company.website}">${company.website}</a></p>`;
            spotlight.innerHTML += `<img src="${company.icon}" alt="${company.name}">`;
        }
    })
    .catch((error) => {
        console.error('Error:', error);
    });


// companies.json END

