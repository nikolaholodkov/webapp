function toggleDropdown() {
  const dropdown = document.getElementById('dropdown-menu');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close the dropdown if clicked outside
document.addEventListener('click', function (event) {
  const dropdown = document.getElementById('dropdown-menu');
  const moreBox = document.querySelector('.more-box');

  if (!dropdown.contains(event.target) && !moreBox.contains(event.target)) {
    dropdown.style.display = 'none';
  }
});

// Function to navigate to the next page
function goToNextPage() {
  window.location.href = "page2.html"; // Replace with the actual next page file name
}

// Function to add a new row to the table
function addRow() {
  const table = document.getElementById("instrument-table").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  newRow.innerHTML = `
    <td><input type="text" name="instrument[]" placeholder="Enter instrument"></td>
    <td><input type="text" name="model[]" placeholder="Enter model"></td>
    <td><input type="text" name="serial-number[]" placeholder="Enter serial number"></td>
    <td><input type="text" name="notes[]" placeholder="Enter notes"></td>
  `;
}

// Function to remove the last row from the table
function removeRow() {
  const table = document.getElementById("instrument-table").getElementsByTagName("tbody")[0];
  if (table.rows.length > 1) {
    table.deleteRow(-1); // Remove the last row
  } else {
    alert("Cannot remove the last row!");
  }
}

// Function to navigate back to the first page
function goBack() {
  window.location.href = "index.html"; // Navigate back to the first page
}