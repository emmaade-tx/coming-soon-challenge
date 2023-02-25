const RegEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const inputEl = $('#email');
const btn = $('#submit');
const iconErrorEl = $('.icon-error');
const textErrorEl = $('.text-error');
const formGroupEl = $('.form-group');
let errors = [];

btn.click((e) => {
  // remove success class
  textErrorEl.removeClass('text-success');

  // reset errors
  errors = [];

  // prevent default action of form
  e.preventDefault();

  // validate email address
  const email = inputEl.val();

  console.log(email);
  if (email == '' || email === undefined) {
    errors.push('Email is required');
    // show error
    iconErrorEl.show();
    textErrorEl.text(errors[0]);
  } else if (!email.match(RegEmail)) {
    errors.push('Email is invalid');
    // show error icon
    iconErrorEl.show();
    textErrorEl.text(errors[0]);
  }

  if (errors.length == 0) {
    // hide error icon
    iconErrorEl.hide();
    textErrorEl.addClass('text-success');
    textErrorEl.text('Thank you for subscribing to our newsletter.');
  }
});
