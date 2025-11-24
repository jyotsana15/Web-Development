"use strict";

class FormBuilder {
  constructor(fields) {
    this.fields = fields;
    this.formContainer = document.getElementById("form-container");
    this.render();
  }

  render() {
    const form = document.createElement("form");
    form.id = "custom-form";

    this.fields.forEach(field => {
      const div = document.createElement("div");
      const label = document.createElement("label");
      label.textContent = field.label;
      const input = document.createElement("input");
      input.type = field.type;
      input.name = field.label.toLowerCase().replace(" ", "-");
      div.appendChild(label);
      div.appendChild(input);
      form.appendChild(div);
    });

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Submit";
    form.appendChild(submitButton);

    this.formContainer.innerHTML = "";
    this.formContainer.appendChild(form);

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = this.getFormData();
      console.log("Form Data:", formData);
      alert("Form data logged to console.");
    });
  }

  getFormData() {
    const formData = {};
    const form = document.getElementById("custom-form");
    const inputs = form.querySelectorAll("input");
    inputs.forEach(input => {
      formData[input.name] = input.value;
    });
    return formData;
  }
}

const formFields = [
  { type: 'text', label: 'Username' },
  { type: 'email', label: 'Email Address' },
  { type: 'password', label: 'Password' }
];

new FormBuilder(formFields);
