// Set the current year in the copyright span in the footer
const yearSpan = document.querySelector('#copyright');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Log a message to the console when a lesson link is clicked
const lessonLinks = document.querySelectorAll('li a');
lessonLinks.forEach(link => {
  link.addEventListener('click', () => {
    console.log(`Lesson link "${link.textContent}" clicked`);
  });
});

// get the current date
const currentDate = new Date();

// get the month, day, and year from the current date
const month = currentDate.getMonth() + 1; // add 1 to get month starting from 1 instead of 0
const day = currentDate.getDate();
const year = currentDate.getFullYear();

// format the date as "MM/DD/YYYY"
const formattedDate = `${month}/${day}/${year}`;

// set the text of the span with id "updated" to the formatted date
const updatedSpan = document.getElementById("updated");
updatedSpan.textContent = formattedDate;
