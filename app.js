function darkModeToggle() {
    if (document.body.hasAttribute('id')) {
        document.body.removeAttribute('id');
        document.querySelector('.main-button').removeAttribute('id');
    } else {
        document.body.setAttribute('id', 'dark-mode');
        document.querySelector('.main-button').setAttribute('id', 'dark-mode');
    }
    document.getElementById('click').currentTime = 0;
    document.getElementById('click').play();

}

document.getElementsByTagName('button')[0].addEventListener('click', darkModeToggle);