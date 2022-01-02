import 'bootstrap-datepicker';
import 'bootstrap-datepicker/js/locales/bootstrap-datepicker.ru';

export default function datepicker() {
    const elements = Array.from(document.querySelectorAll('.js-datepicker'));

    elements.forEach(element => {
        $(element)
            .datepicker({
                format: 'dd.mm.yyyy',
                container: '#picker-container',
                language: 'ru',
                autoclose: true,
                templates: {
                    leftArrow: `<svg width="14" height="14" aria-hidden="true" class="icon-datepicker-prev"><use xlink:href="#datepicker-prev"></use></svg>`,
                    rightArrow: `<svg width="14" height="14" aria-hidden="true" class="icon-datepicker-next"><use xlink:href="#datepicker-next"></use></svg>`
                }
            })
            .on('show', function(e) {
                element.classList.add('datepicker-shown');
            })
            .on('hide', function(e) {
                element.classList.remove('datepicker-shown');
            });
    });
}
