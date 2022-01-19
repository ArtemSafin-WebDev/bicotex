document.addEventListener('DOMContentLoaded', () => {
    const catalog = document.querySelector('.catalog');

    if (catalog) {
        setTimeout(() => {
            window.openModal('#catalog-modal');
        }, 1000);
    }

    let productForm = document.querySelector('#product-form');

    if (productForm) {
        productForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(productForm)
                    .parsley()
                    .isValid()
            ) {
                productForm.reset();
                $(productForm)
                    .parsley()
                    .reset();
                const success = document.querySelector('.product__form-success');
                if (success) {
                    success.classList.add('shown');

                    setTimeout(() => {
                        success.classList.remove('shown');
                    }, 6000);
                }
            }
        });
    }
    let careerForm = document.querySelector('#career-form');

    if (careerForm) {
        careerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (
                $(careerForm)
                    .parsley()
                    .isValid()
            ) {
                careerForm.reset();
                $(careerForm)
                    .parsley()
                    .reset();
                const success = document.querySelector('.career__form-success');
                if (success) {
                    success.classList.add('shown');

                    setTimeout(() => {
                        success.classList.remove('shown');
                    }, 6000);
                }
            }
        });
    }
});
