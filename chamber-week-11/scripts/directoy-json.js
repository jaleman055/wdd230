const url = 'https://raw.githubusercontent.com/jaleman055/wdd230/main/chamber-week-09/data.json'; // Path for online data.json file

// LOCAL JSON FOR TESTING: const url = 'data.json';

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    const directory = document.querySelector('.directory');

    companies.forEach((company) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let icon = document.createElement('img');

        h2.textContent = company.name;
        address.textContent = `Address: ${company.address}`;
        phone.textContent = `Phone: ${company.phone}`;
        website.href = company.website;
        website.textContent = 'Visit Website';
        icon.setAttribute('src', company.icon);


        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(icon);

        directory.appendChild(card);
    });
}

getCompanyData();
