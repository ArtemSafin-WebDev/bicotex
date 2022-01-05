export default function cookies() {
    const cookies = document.querySelector('.js-cookies');
    const closeBtn = document.querySelector('.js-cookies-close');

    if (cookies) {
        if (sessionStorage.getItem('cookies-accepted') == 'yes') {
            cookies.classList.add('hidden');
        }
        closeBtn.addEventListener('click', event => {
            event.preventDefault();
            cookies.classList.add('hidden');

            sessionStorage.setItem('cookies-accepted', 'yes');
        });
    }
}
