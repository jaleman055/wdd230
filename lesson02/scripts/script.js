// Select all the grid items
const gridItems = document.querySelectorAll('.grid-item');

// Loop through the grid items and add a click event listener to each one
gridItems.forEach(function(item) {
    item.addEventListener('click', function() {
        // Toggle a class of 'selected' on the clicked item
        item.classList.toggle('selected');
        // Log the item's index and title to the console
        console.log('You clicked on item #' + (Array.from(gridItems).indexOf(item) + 1));
        console.log('The design principle is ' + item.querySelector('h2').textContent);
    });
});
