(function() {
  window.contacts   = window.contacts || [];
  window.contactDOM = window.contactDOM || {};
  window.events     = window.events || {
    add: 0,
    remove: 0,
    imports: 0,
    exports: 0
  };

  window.onload = function() { // Add click/submit handlers
    window.currentForm = document.getElementById('add-contact-form'); // Used in display()

    addDefaultContacts();
    
    // Button events
  
    document.getElementById('import-contacts-button').addEventListener('click', function(event) {
      display('import-contacts-form');
    });
  
    document.getElementById('add-contact-button').addEventListener('click', function(event) {
      display('add-contact-form');
    });
  
    document.getElementById('export-contacts-button').addEventListener('click', function(event) {
      display('export-contacts-form');
      window.events.exports += 1;
      document.getElementById('export-area').innerHTML = JSON.stringify(window.contacts);
    });
  
    document.getElementById('event-tracker-button').addEventListener('click', function(event) {
      display('stats-form');
      document.getElementById('tracker-area').innerHTML = JSON.stringify(window.events);
    });
    
    // Form submission events
  
    document.getElementById('add-contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      var contact = new Contact(
        document.getElementById('first-name').value,
        document.getElementById('last-name').value,
        document.getElementById('number').value,
        document.getElementById('image').value
      );
    
      document.getElementById('first-name').innerHTML = "";
      document.getElementById('last-name').innerHTML  = "";
      document.getElementById('number').innerHTML     = "";
      document.getElementById('image').innerHTML      = "";
    
      if(addContact(contact))
        window.events.add += 1;
    });
    
    document.getElementById('import-contacts-form').addEventListener("submit", function(event) {
      event.preventDefault();
      var contacts = JSON.parse(document.getElementById("import-area").value);
      contacts.forEach(function(contact) {
        contact.key = function() {
          return this.first + this.last + this.number + this.image;
        }
        addContact(contact);
      });
      window.events.imports += 1;
      document.getElementById("import-area").value = "";
    });
  }

  function addContact(contact) {  // adds contact to window.contacts, window.contactDOM, and DOM
                                  // adds removeContact event handler
    
    if(!isUniqueContact(contact)) // only take new contacts
      return false;

    window.contacts.push(contact);
  
    var contacts = document.getElementById("contacts-table");
    var tr = document.createElement("tr");
  
    var image = document.createElement("td");
    var img   = document.createElement("img");
    img.setAttribute("src", contact.image);
    image.appendChild(img);
    tr.appendChild(image);
  
    var fullName = document.createElement("td");
    fullName.innerHTML = contact.first + " " + contact.last;
    fullName.setAttribute("class", "name");
    tr.appendChild(fullName);
  
    var number = document.createElement("td");
    number.innerHTML = contact.number;
    number.setAttribute("class", "number");
    tr.appendChild(number);
    
    var x = document.createElement("td");
    var button = document.createElement("button");
    button.innerHTML = "X";
    button.setAttribute("class", "close");
    x.appendChild(button);
    tr.appendChild(x);
  
    contacts.appendChild(tr);
    
    var key = contact.key();
    window.contactDOM[key] = tr;
    

    button.addEventListener('click', function(event) {
      removeContact(contact);
    });
    
    return true;
  }
  
  function removeContact(contact) { // Removes contact from window.contacts and DOM
    window.contacts.forEach(function(c, i) {
      if(contact.key() == c.key())
        window.contacts.splice(i, 1);
    });
    
    var key = contact.key();
    var tr = window.contactDOM[key];
    tr.parentNode.removeChild(tr);
    
    window.events.remove += 1;
      
  }

  function display(form) { // Displays the current form (add, import, export, events)
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
  
  function addDefaultContacts() { // Seed Data
    addContact(new Contact("Arya", "Stark", "659-234-1231", "http://flavorwire.files.wordpress.com/2013/07/screen-shot-2013-07-01-at-5-27-11-pm.png"));
    addContact(new Contact("Ned", "Stark", "659-234-1231", "http://i.dailymail.co.uk/i/pix/2014/05/10/article-2625187-1DBA0F6200000578-443_306x423.jpg"));
    addContact(new Contact("Little", "Finger", "659-234-1231", "http://i.imgur.com/6JHgc18.gif"));
    addContact(new Contact("White", "Walker", "659-234-1231", "http://www.asset1.net/tv/pictures/show/game-of-thrones/Game-Of-Thrones-Houses-Stark-16x9-1.jpg"));
  }
  
  function isUniqueContact(contact) { // checks to see if the contact exists in window.contacts
    var unique = true;
    window.contacts.forEach(function(c) {
      if(contact.key() == c.key())
        unique = false;
    });
    return unique;
  }
})();