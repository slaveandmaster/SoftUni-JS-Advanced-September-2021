function notify(message) {
  const msgDiv = document.querySelector('#notification');
  msgDiv.textContent = message;
  msgDiv.style.display = 'block';
  msgDiv.addEventListener('click', (e) => {
    e.target.style.display = 'none';
  })
  // TODO:
}