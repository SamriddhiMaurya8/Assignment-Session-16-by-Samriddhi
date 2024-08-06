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


function generateForm(formData){
    const form = document.getElementById('form') ; 
    form.innerHTML = '' ;
    
    for(let i = 0 ; i < formData.length ; i++){
        const field = formData[i] ;
        const wrapper = document.createElement('div') ;
        const label = document.createElement('label') ; 
        label.htmlFor = field.id ; 
        label.textContent =field.label ; 
        wrapper.appendChild(label) ; 
        
        let input ; 
        if(field.type === 'select'){
            input = document.createElement('select') ; 
            input.id = field.id ; 
            input.name=field.name ; 
            if(field.required){
                input.required = true ;
            }

            for(let j  = 0 ; j < field.options.length ; j++){
                const option = field.options[j] ;
                const opt = document.createElement('option') ; 
                opt.value = option.value ; 
                opt.textContent = option.label ; 
                input.appendChild(opt) ; 
            }
        }
        else if(field.type === 'text'){
            input = document.createElement('textarea') ; 
            input.id = field.id ; 
            input.name = field.name ; 
            if(field.required)
                input.required = true ; 
            if(field.minLength){
                input.minLength = field.minLength ;
            }
            if(field.placeholder){
                input.placeholder = field.placeholder  ; 
            }
            if(field.maxLength){
                input.maxLength = field.maxLength ;
            }
        }
        else{
            
        }
            


        }

    }
}
