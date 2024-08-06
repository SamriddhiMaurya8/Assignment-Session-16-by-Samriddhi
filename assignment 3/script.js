const formInput = [
    {
        type: "text",
        id: "fullName",
        name: "full_name",
        maxLength: "50",
        minLength: "2",
        pattern: "^[a-zA-Z ]*$",
        placeholder: "Full Name",
        required: true,
        value: "",
        label: "Full Name:",
    },
    {
        type: "email",
        id: "email",
        name: "email",
        placeholder: "Email",
        required: true,
        value: "",
        label: "Email:",
    },
    {
        type: "checkbox",
        id: "accept",
        name: "accept",
        required: true,
        checked: false,
        value: "accepted",
        label: "Accept Terms:",
    },
    {
        type: "password",
        id: "password",
        name: "password",
        maxLength: "20",
        minLength: "6",
        pattern: "",
        placeholder: "Password",
        required: true,
        value: "",
        label: "Password:",
    },
    {
        type: "date",
        id: "dob",
        name: "dob",
        max: "",
        min: "",
        placeholder: "Date of Birth",
        required: true,
        value: "",
        label: "Date of Birth:",
    },
    {
        type: "number",
        id: "marks",
        name: "marks",
        min: "0",
        max: "100",
        placeholder: "Marks",
        required: true,
        value: "",
        label: "Marks:",
    },
    {
        type: "radio",
        id: "genderMale",
        name: "gender",
        required: true,
        checked: false,
        value: "Male",
        label: "Male:",
    },
    {
        type: "radio",
        id: "genderFemale",
        name: "gender",
        required: true,
        checked: false,
        value: "Female",
        label: "Female:",
    },
    {
        type: "select",
        id: "state",
        name: "state",
        required: true,
        value: "",
        label: "State:",
        options: [
            { label: "Delhi", value: "delhi" },
            { label: "Mumbai", value: "mumbai" },
            { label: "UP", value: "up" },
        ],
    },
];




function generateForm(config) {
    const form = document.getElementById("form");
    form.innerHTML = ''; 

    for (let i = 0; i < config.length; i++) {
        const field = config[i];
        const div = document.createElement('div');
        const label = document.createElement('label');
        label.htmlFor = field.id;
        label.textContent = field.label;
        div.appendChild(label);

        let input;
        if (field.type === 'select') {
            input = document.createElement('select');
            input.id = field.id;
            input.name = field.name;
            if (field.required) 
                input.required = true;

            for (let j = 0; j < field.options.length; j++) {
                const option = field.options[j];
                const opt = document.createElement('option');
                opt.value = option.value;
                opt.textContent = option.label;
                input.appendChild(opt);
            }
        } else if (field.type === 'textarea') {
            input = document.createElement('textarea');
            input.id = field.id;
            input.name = field.name;
            if (field.required) 
                input.required = true;
            if (field.placeholder) 
                input.placeholder = field.placeholder;
            if (field.maxLength) 
                input.maxLength = field.maxLength;
            if (field.minLength) 
                input.minLength = field.minLength;
             } 
        else {
            input = document.createElement('input');
            input.type = field.type;
            input.id = field.id;
            input.name = field.name;
            if (field.placeholder) 
                input.placeholder = field.placeholder;
            if (field.required) 
                input.required = true;
            if (field.value) 
                input.value = field.value;
            if (field.pattern) 
                input.pattern = field.pattern;
            if (field.maxLength) 
                input.maxLength = field.maxLength;
            if (field.minLength)
                 input.minLength = field.minLength;
            if (field.min) 
                input.min = field.min;
            if (field.max)
                 input.max = field.max;
            if (field.checked) 
                input.checked = field.checked;
        }

        div.appendChild(input);
        form.appendChild(div);
    }

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Submit';
    form.appendChild(submit);
}

document.getElementById("btn").addEventListener("click", () => generateForm(formInput));
