$(document).ready(function() { 
var options = { 
target:        '#alert',
beforeSubmit:  showRequest,
success:       showResponse
}; 
$('#contactForm').ajaxForm(options); 
}); 
function showRequest(formData, jqForm, options) { 
var queryString = $.param(formData); 
return true; 
} 
function showResponse(responseText, statusText)  {  
} 
$.fn.clearForm = function() {
  return this.each(function() {
	var type = this.type, tag = this.tagName.toLowerCase();
	if (tag == 'form')
	  return $(':input',this).clearForm();
	if (type == 'text' || type == 'password' || tag == 'textarea')
	  this.value = '';
	else if (type == 'checkbox' || type == 'radio')
	  this.checked = false;
	else if (tag == 'select')
	  this.selectedIndex = -1;
  });
};