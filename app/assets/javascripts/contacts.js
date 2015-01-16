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
  });
  
  document.getElementById('event-tracker-button').addEventListener('click', function(event) {
    display('stats-form');
  });
}

function display(form) {
  if(window.currentForm.id != form) {

    var listener = window.currentForm.addEventListener('transitionend', function() {
      window.currentForm.style.display = 'none';
      window.currentForm.removeEventListener(listener);
      
      window.currentForm = document.getElementById(form);
      window.currentForm.style.display = 'block';
      window.currentForm.classList.remove('hide');
      
    });
    
    window.currentForm.classList.add('hide');
  }
}