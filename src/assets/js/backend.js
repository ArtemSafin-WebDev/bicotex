document.addEventListener('DOMContentLoaded', () => {
    const catalog = document.querySelector('.catalog');

    if (catalog) {
        setTimeout(() => {
            window.openModal('#catalog-modal');
        }, 1000);
    }
});
