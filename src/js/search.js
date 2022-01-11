export default function search() {
    const searchLink = document.querySelector('.page-header__search-link');
    const searchClose = document.querySelector('.page-header__search-panel-close');
    const header = document.querySelector('.page-header');

    const clearSearch = document.querySelector('.search__form-clear');

    if (searchLink && searchClose) {
        searchLink.addEventListener('click', event => {
            event.preventDefault();
            header.classList.toggle('search-shown');
            searchLink.classList.toggle('active');
        });
        searchClose.addEventListener('click', event => {
            event.preventDefault();
            header.classList.remove('search-shown');
            searchLink.classList.remove('active');
        });
    }

    if (clearSearch) {
        clearSearch.addEventListener('click', event => {
            event.preventDefault();
            const input = clearSearch.closest('form').querySelector('input');

            if (input) {
                input.value = '';
            }
        });
    }
}
