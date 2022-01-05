export default function search() {
    const searchLink = document.querySelector('.page-header__search-link');
    const searchClose = document.querySelector('.page-header__search-panel-close');
    const header = document.querySelector('.page-header');

    if (searchLink && searchClose) {
        searchLink.addEventListener('click', event => {
            event.preventDefault();
            header.classList.toggle('search-shown');
            searchLink.classList.toggle('active');
        });
        searchClose.addEventListener('click', event => {
            event.preventDefault();
            header.classList.remove('search-shown');
        });
    }
}
