function goToPreviousPage() {
  const currentPage = window.location.pathname.split('/').pop();

  if (currentPage === '2.html') {
    window.location.href = '1.html';
  } else if (currentPage === '3.html') {
    window.location.href = '2.html';
  } else if (currentPage === '4.html') {
    window.location.href = '3.html';
  } else if (currentPage === '5.html') {
    window.location.href = '4.html';
  }
}

function goToNextPage() {
  const currentPage = window.location.pathname.split('/').pop();

  if (currentPage === '1.html') {
    window.location.href = '2.html';
  } else if (currentPage === '2.html') {
    window.location.href = '3.html';
  } else if (currentPage === '3.html') {
    window.location.href = '4.html';
  } else if (currentPage === '4.html') {
    window.location.href = '5.html';
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




document.getElementById('reportForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());
  try {
    const response = await fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      alert('Data saved successfully!');
    } else {
      alert('Failed to save data.');
    }
  } catch (err) {
    console.error(err);
    alert('An error occurred.');
  }
});

document.getElementById('viewReports').addEventListener('click', () => {
  window.location.href = 'reports.html';
});

