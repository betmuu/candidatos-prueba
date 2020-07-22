/**
 * @see http://youmightnotneedjquery.com/
 */
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}
 
function init() {
  
  inboxShow();
}

function inboxShow() {
  document.getElementById('inbox-list').classList.remove('hide');
}

function mailCreateShow() {
  document.getElementById('inbox-list').classList.add('hide');
  document.getElementById('mail-create').classList.remove('hide');
}

function mailSend() {
  var mail = {
    to: document.getElementById('toInput').value,
    cc: document.getElementById('ccInput').value,
    cco: document.getElementById('ccoInput').value,
    subject: document.getElementById('subject').value,
    body: document.getElementById('body').value,
  };
  console.log(mail);
  // TODO mail fetch POST
  document.getElementById('mail-form').classList.add('hide');
  document.getElementById('inbox-list').classList.remove('hide');
  document.getElementById('msg-success').classList.remove('hide');
}




ready(init);