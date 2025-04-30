function saveData() {
  // Add your save logic here
  alert('Data saved successfully!');
}

function goToPreviousPage() {
  const currentPage = window.location.pathname.split('/').pop();

  if (currentPage === 'secondpage.html') {
    window.location.href = 'index.html';
  } else if (currentPage === 'thirdpage.html') {
    window.location.href = 'secondpage.html';
  } else if (currentPage === 'fourthpage.html') {
    const userResponse = confirm("Are you sure you want to go back to the third page?");
    if (userResponse) {
      window.location.href = 'thirdpage.html';
    } else {
      alert("Stayed on the current page.");
    }
  }
}

function goToNextPage() {
  const currentPage = window.location.pathname.split('/').pop();

  if (currentPage === 'secondpage.html') {
    // Navigate to the third page
    window.location.href = 'thirdpage.html';
  } else if (currentPage === 'thirdpage.html') {
    // Show a confirmation dialog specific to the third page
    const userResponse = confirm("Calibration needed?");
    if (userResponse) {
      // If "Yes" is clicked, navigate to the fourth page
      window.location.href = 'fourthpage.html'; // Replace with the actual URL of the next page
    } else {
      // If "No" is clicked, do nothing
      alert("Calibration skipped.");
    }
  }
}

function addRow() {
  const table = document.getElementById('dynamicTable').getElementsByTagName('tbody')[0];
  const newRow = table.rows[0].cloneNode(true);
  const inputs = newRow.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = ''; // Clear input values
  }
  table.appendChild(newRow);
}

function removeRow(button) {
  const row = button.parentElement.parentElement;
  const table = document.getElementById('dynamicTable').getElementsByTagName('tbody')[0];
  if (table.rows.length > 1) {
    table.removeChild(row);
  } else {
    alert('At least one row must remain.');
  }
}