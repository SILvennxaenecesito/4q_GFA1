      const form = document.getElementById('signup-form');
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const sex = document.querySelector('input[name="sex"]:checked').value;
        const email = document.getElementById('email').value;
        const contactNumber = document.getElementById('contact-number').value;
        console.log(`Thank you for signing up, ${firstName} ${lastName}!`);
        form.reset();
      });