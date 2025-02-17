document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    setTimeout(() => {
        loader.classList.add('hidden');
        content.classList.remove('hidden');
    }, 3000);
});