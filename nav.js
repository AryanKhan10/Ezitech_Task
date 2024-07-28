let activeclass = (event) => {
    document.querySelectorAll('#nav-list li').forEach((el) => el.classList.remove('activeLink'));
    event.target.classList.add('activeLink');
}
document.querySelectorAll('#nav-list li').forEach((link) => {
    link.addEventListener('click', activeclass);
});

    var typed = new Typed('#auto-type', {
    strings: ['Programming', 'Web Design', 'Social Skills', 'Marketing'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });
