import ContactModal from "../modal/ContactModal";


const fetchHTML = url => {
  return new Promise(resolve => {
    const options = {
      method: 'GET',
      headers: new Headers([ ['Content-Type', 'application/json; charset=UTF-8'] ])
    };

    fetch(url, options)
      .then(response => {
        if (response) {
          if (response.ok) {
            resolve(response.text());
          } else {
            console.error(response.status);
          }
        }
      })
      .catch(error => {
        console.error(error);
      });
  });
};


const contactModal = () => {
  document.querySelector('#contact-modal').addEventListener('click', () => {
    fetchHTML('assets/html/contact.html')
      .then(template => {
        new ContactModal({
          template: template
        });
      });
  }, false);
};


export { contactModal };
