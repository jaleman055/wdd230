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

fetch('companies.json')
    .then(response => response.json())
    .then(data => {
        const spotlight1 = document.querySelector('.spotlight1');
        const spotlight2 = document.querySelector('.spotlight2');
        const spotlight3 = document.querySelector('.spotlight3');

        const company1 = data.companies[0];
    
        spotlight1.innerHTML += `<p><strong>Our top members:</strong> ${company1.name} - <strong>Website:</strong> <a href="${company1.website}">${company1.website}</a></p>` ;
        spotlight1.innerHTML += `<img src="${company1.icon}" alt="${company1.name}">`;
        
        

        const company2 = data.companies[1];
        spotlight2.innerHTML += `<p><strong>Our top members:</strong> ${company2.name} - <strong>Website:</strong> <a href="${company2.website}">${company2.website}</a></p>`;
        spotlight2.innerHTML += `<img src="${company2.icon}" alt="${company2.name}">`;

        const company3 = data.companies[2];
        spotlight3.innerHTML += `<p><strong>Our top members:</strong> ${company3.name} - <strong>Website:</strong> <a href="${company3.website}">${company3.website}</a></p>`;
        spotlight3.innerHTML += `<img src="${company3.icon}" alt="${company3.name}">`;
    })
    .catch((error) => {
        console.error('Error:', error);
    });

// companies.json END

