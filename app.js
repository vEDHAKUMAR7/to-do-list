document.addEventListener('DOMContentLoaded', function () {
    // Get the list container and input field
    const addlist = document.getElementsByClassName("addedList")[0];  // Get the first element with class "addedList"
    const list = document.getElementById("inputvalue");  // Get the input field by its ID

    // Function to add items to the list
    function add() {
        if (list.value.trim() !== "") {  // Check if the input is not empty
            const newItem = document.createElement("li");  // Create a new <li> element
            newItem.textContent = list.value;  // Set its content to the value of the input field
            addlist.appendChild(newItem);  // Append the new <li> item to the list
            list.value = "";  // Clear the input field after adding the item
        }
    }

    // Attach the add function to the button's click event
    const addButton = document.querySelector(".add");  // Get the Add button
    addButton.addEventListener('click', add);  // Listen for the button click
});
