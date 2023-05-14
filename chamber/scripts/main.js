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
