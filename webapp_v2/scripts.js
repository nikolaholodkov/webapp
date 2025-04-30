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
  }
}

function goToNextPage() {
  const currentPage = window.location.pathname.split('/').pop();

  if (currentPage === 'index.html') {
    window.location.href = 'secondpage.html';
  } else if (currentPage === 'secondpage.html') {
    window.location.href = 'thirdpage.html';
  }
}