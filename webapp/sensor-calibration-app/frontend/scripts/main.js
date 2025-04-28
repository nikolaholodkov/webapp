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