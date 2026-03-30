console.log("Bem-vindo ao Netflix!");

const profileLinks = document.querySelectorAll('.profile-link');
profileLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const article = link.querySelector('.profile');
        if (!article) return;

        const img = article.querySelector('img');
        const name = article.querySelector('figcaption')?.textContent.trim() || '';
        const image = img?.getAttribute('src') || '';

        localStorage.setItem('activeProfile', JSON.stringify({ name, image }));

        // Redireciona para catálogo
        window.location.href = link.getAttribute('href') || 'catalogo/catalogo.html';
    });
});