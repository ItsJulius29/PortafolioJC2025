const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
  searchContainer.classList.toggle('active');
  if (searchContainer.classList.contains('active')) {
    searchInput.focus();
  }
});
