$(function () {
  $("#registration").validate({

    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      pwd: {
        required: true,
        minlength: 5
      },
      Confirmpwd: {
        required: true,
        equalTo: "#pwd"
      },
      DOB: "required",
      Phonenum: "required",
      ddl_secqus: { required: true },
      ans: "required"
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      pwd: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      Confirmpwd: {
        required: "Please provide a password",
        equalTo: "Please enter the password same as above"
      },
      email: "Please enter argdthg valid email address",
      DOB: "Please select date of birth",
      Phonenum: "Please enter mobile number",
      ddl_secqus:
      {
        required: "<br/>Please slect the security question"
      },
      ans: "Please enter answer"
    },
    errorPlacement: function (label, element) {
      label.addClass('arrow');
      label.insertAfter(element);
    },
    wrapper: 'span',
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function (form) {
      // register();
      form.submit();
    }
  });
});
