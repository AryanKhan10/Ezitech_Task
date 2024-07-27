let activeclass = (event) => {
    document.querySelectorAll('#nav-list li').forEach((el) => el.classList.remove('activeLink'));
    event.target.classList.add('activeLink');
}
document.querySelectorAll('#nav-list li').forEach((link) => {
    link.addEventListener('click', activeclass);
});