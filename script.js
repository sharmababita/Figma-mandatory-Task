console.log('Hello!');

// Hamburger Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('.navigation').style.display =
    document.querySelector('.navigation').style.display === 'block'
      ? 'none'
      : 'block';
});
