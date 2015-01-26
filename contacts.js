(function() {
  window.contacts = window.contacts || [];

  window.onload = function() {
    window.currentForm = document.getElementById('add-contact-form');
  
  
    document.getElementById('import-contacts-button').addEventListener('click', function(event) {
      display('import-contacts-form');
    });
  
    document.getElementById('add-contact-button').addEventListener('click', function(event) {
      display('add-contact-form');
    });
  
    document.getElementById('export-contacts-button').addEventListener('click', function(event) {
      display('export-contacts-form');
      document.getElementById('export-area').innerHTML = JSON.stringify(window.contacts);
    });
  
    document.getElementById('event-tracker-button').addEventListener('click', function(event) {
      display('stats-form');
    });
  
    document.getElementById('add-contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      var contact = {
        first: document.getElementById('first-name').value,
        last: document.getElementById('last-name').value,
        number: document.getElementById('number').value,
        image: document.getElementById('image').value 
      };
      if(contact.image == "")
        contact.image = "https://www.etsy.com/images/avatars/default_avatar_75px.png";
    
        document.getElementById('first-name').innerHTML = "";
        document.getElementById('last-name').innerHTML  = "";
        document.getElementById('number').innerHTML     = "";
        document.getElementById('image').innerHTML      = "";
    
      addContact(contact);
    });
  }

  function addContact(contact) {
    window.contacts.push(contact);
  
    var contacts = document.getElementById("contacts-table");
    var tr = document.createElement("tr");
  
    var image = document.createElement("td");
    var img   = document.createElement("img");
    img.setAttribute("src", contact.image);
    image.appendChild(img);
    tr.appendChild(image);
  
    var first = document.createElement("td");
    first.innerHTML = contact.first;
    tr.appendChild(first);
  
    var last = document.createElement("td");
    last.innerHTML = contact.last;
    tr.appendChild(last);
  
    var number = document.createElement("td");
    number.innerHTML = contact.number;
    tr.appendChild(number);
  
    contacts.appendChild(tr);
  
  }

  function display(form) {
    if(window.currentForm.id != form) {

      var listener = window.currentForm.addEventListener('transitionend', function() {
        window.currentForm.style.display = 'none';
        window.currentForm.removeEventListener('transitionend', listener);
      
        window.currentForm = document.getElementById(form);
        window.currentForm.style.display = 'block';
        window.currentForm.classList.remove('hide');
      
      });
    
      window.currentForm.classList.add('hide');
    }
  }
})();