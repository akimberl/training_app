const selectElement = document.querySelector('.choose');

selectElement.addEventListener('change', async (event) => {
  const container = document.querySelector('.container');
  const data = await fetch(`/wods/${event.target.value}`);
  const html = await data.text();
  console.log(html);
  window.document.innerHTML += html;
});
