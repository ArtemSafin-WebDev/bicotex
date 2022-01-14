export default function employeeText() {
    const elements = Array.from(document.querySelectorAll('.career__employees-slider-card-text'));

    elements.forEach(element => {
        const btn = element.querySelector('.career__employees-slider-card-text-show-more');

        const btnOriginalText = btn.textContent;

        const btnOpenText = btn.getAttribute('data-text');

        let open = false;

        btn.addEventListener('click', event => {
            event.preventDefault();

            open = !open;


            if (open) {
                element.classList.add('text-shown');
                btn.textContent = btnOpenText;
            } else {
                element.classList.remove('text-shown');
                btn.textContent = btnOriginalText;
            }
        })
    })
}