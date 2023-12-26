// Import JustValidate file
import JustValidate from "just-validate";

// Get form element using getElementById
const formEl = document.getElementById("courierForm");

const validateForm = new JustValidate(formEl);
console.log(validateForm);

// validate form using addfield method
// validate 1st name

validateForm.addField(
  "#firstName",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 25,
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

// validate 2nd name

validateForm.addField(
  "#lastName",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 1,
    },
    {
      rule: "maxLength",
      value: 25,
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

// validate mobile number

validateForm.addField(
  "#mobileNumber",
  [
    {
      rule: "required",
    },
    {
      rule: "number",
    },
    {
      rule: "minLength",
      value: 10,
    },
    {
      rule: "maxLength",
      value: 10,
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

// validate date&time

validateForm.addField(
  "#dateTime",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

// validate address

validateForm.addField(
  "#address",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);
