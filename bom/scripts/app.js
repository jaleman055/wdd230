// Get references to the input, button, and list elements
const input = document.getElementById('favchap');
const addButton = document.getElementById('add-btn');
const list = document.getElementById('list');

// Add click event listener for the Add Chapter button
addButton.addEventListener('click', function() {
    // Check if input is not blank
    if (input.value.trim() !== '') {
        // Create a new list item
        const li = document.createElement('li');
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete');
        
        // Populate the list item's text with the input
        li.textContent = input.value;
        
        // Append the delete button to the list item
        li.appendChild(deleteButton);
        
        // Append the new list item to the list
        list.appendChild(li);
        
        // Add click event listener to the delete button
        deleteButton.addEventListener('click', function() {
            // Remove the parent list item
            list.removeChild(li);
            // Refocus to the input box
            input.focus();
        });
        
        // Clear the input box and focus on it
        input.value = '';
        input.focus();
    }
});


