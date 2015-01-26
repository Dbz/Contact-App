(function() {
  window.Contact = window.Contact || {};
  
  var Contact = window.Contact = function(first, last, number, image) {
    this.first  = first;
    this.last   = last;
    this.number = number;
    this.image  = image;
  }
  
  Contact.prototype.key = function() {
    return this.first + this.last + this.number + this.image;
  }
  
})();