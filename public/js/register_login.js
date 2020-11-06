document.addEventListener('submit', async (event) => {
  /* login */
  if (document.loginForm) {
    event.preventDefault();
    const error = document.querySelector('.errorContainer');
    const { name } = document.loginForm;
    const { city } = document.loginForm;

    /* check if all inputs filled */
    if (!(name.value && city.value)) {
      error.innerText = 'Please, fill all the inputs';
      return;
    }

    const data = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name.value, city: city.value }),
    });
    if (data.status === 200) {
      return window.location.assign('/'); // assign and href saves the histroy and let you go back to previous page
    }
    name.classList.add('error');
    city.classList.add('error');
    error.innerText = 'wrong password or email!';
  }
  /* registration */
  if (document.registrationForm) {
    event.preventDefault();
    const error = document.querySelector('.errorContainer');
    const { name } = document.registrationForm;
    const { city } = document.registrationForm;

    /* check if all inputs filled */
    if (!(name || city)) {
      error.innerText = 'Please, fill all the inputs';
    }

    const data = await fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name.value, city: city.value }),
    });
    if (data.status === 200) {
      window.location.assign('/login'); // assign and href saves the histroy and let you go back to previous page
      return;
    }
    name.classList.add('error');
    error.innerText = 'name is already taken!';
  }
});
