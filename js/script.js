const toogleDarkMode = document.querySelector('.toogle');
toogleDarkMode.addEventListener('click', darkMode);

function darkMode() {
    if (toogleDarkMode.classList.contains('active')) {
        toogleDarkMode.classList.remove('active');
        document.querySelector('body').style.background = 'none';
        document.querySelector('body').style.color = '#000';
    } else {
        toogleDarkMode.classList.add('active');
        document.querySelector('body').style.backgroundColor = '#202020';
        document.querySelector('body').style.color = '#fff';
    }
}