const state = {
  checkbox_values:[],
  radio_value: "friends"
}

$('input').focus(function(){
    $(this).parents('.input_cont').addClass('filled');
});
   
$('input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
      $(this).parents('.input_cont').removeClass('filled');  
    } else {
      $(this).addClass('filled');
    }
  })  

  document.getElementById("your-name").addEventListener("keypress",function(event){
    const keys = /[0-9]/;
    const label = event.target.parentNode.children[2];
    if(event.key.match(keys)){
      label.classList.remove("hide")
      label.innerText = "no digits allowed"
      event.preventDefault()
    }else{
      label.classList.add("hide")
    }
  })

  
  const emailValidation = value => {
    if(!value || value == null){return false}
    const label = document.getElementById("email_error")
    const regex = /[a-zA-Z0-9]@christuniversity.in/;
    if(regex.test(value)){
      label.classList.add("hide")
      return true
    }else{    
      label.classList.remove("hide")
      label.innerText = "email should end with @christuniversity.in"
      return false
    }
  }

  const passwordValidator = value => {
    if(!value || value == null){return false}
    const label = document.getElementById("password_error")
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).+$/
    if(regex.test(value)){
      label.classList.add("hide")
      return true
    }else{    
      label.classList.remove("hide")
      label.innerText = "Invalid password"
      alert("PASSWORD VALIDATION\n\n-A minimum of 1 lower case letter\n-A minimum of 1 upper case letter\n-A minimum of 1 numeric character\n-1 special character")
      return false
    }
  }

  const checkboxHandler = (cb) => {
    if(cb.checked){
      state.checkbox_values.push(cb.value)

    }else{
      state.checkbox_values = state.checkbox_values.filter(el => el != cb.value)
    }
    console.log(state.checkbox_values)
  }

  const radioBtnHandler = (rb) => {
    if(rb.checked){
      state.radio_value = rb.value
    }
    console.log(state.radio_value)
  }

  const checkboxValidator = () => {
    const label = document.getElementById("checkbox_error")
    if(state.checkbox_values.length == 0){
      label.classList.remove("hide")
      label.innerText = "select at least one option"
      return false
    }else{
      label.classList.add("hide")
      return true
    }
  }


  const validateFormHandler = () => {
    event.preventDefault();
    let email,password;
    email=password=false
    const form = document.getElementById("add_member_form")
    for(let i=0;i<form.elements.length;i++){
      if(form.elements[i].name == "email"){
        email = emailValidation(form.elements[i].value)
      }else if(form.elements[i].name == "password"){
        password = passwordValidator(form.elements[i].value)
      }
    }

    var check = checkboxValidator()

    if(!check){
      return
    }

    if(email && password){
      alert(`Form submitted successfully`)
      form.reset()
      $('input').parents('.input_cont').removeClass('filled');  
    }
  }

  const showPasswordHandler = () => {
    const field = document.getElementById("password_field")
    field.type == "text" ? field.type = "password" : field.type = "text"
  }