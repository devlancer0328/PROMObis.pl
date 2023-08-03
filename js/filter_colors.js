const colors_filter_btn = document.querySelector('#category-section .category-filters .filters-center .filter-color-container');
const colors_container = document.querySelector('#category-section .category-filters .filters-center .filter-color-container .circle_colors_container');

colors_filter_btn.addEventListener('click', () => {
    colors_container.classList.toggle('active');
});