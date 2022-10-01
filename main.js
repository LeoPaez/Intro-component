window.addEventListener("load", ()=> {
    const form = document.querySelector(".form")
    const nombre = document.getElementById("nombre")
    const apellido = document.getElementById("apellido")
    const email = document.getElementById("email")
    const pass = document.getElementById("pass")
    const errorIcon = document.getElementById("errorIcon")

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = () => {
        // capturar los valores ingresados por el usuario
        const nombreValor = nombre.value.trim();
        const apellidoValor = apellido.value.trim()
        const emailValor = email.value.trim();
        const passValor = pass.value.trim()
        
        // validando campo nombre
        // (!nombreValor) ? console.log("CAMPO VACIO") : console.log(nombreValor)  operador ternario
        // if(nombreValor === "")
        if(!nombreValor) {
            validaFalla(nombre, "First Name cannot be empty")
        } else {
            validaOk(nombre)
        }

        if(!apellidoValor) {
            validaFalla(apellido, "Last Name cannot bet empty")
        } else {
            validaOk(apellido)
        }

        if(!emailValor) {
            validaFalla(email, "Email cannot be empty")
        } else if(!validaEmail(emailValor)) {
            validaFalla(email, "Looks like this is not an email")
        } else {
            validaOk(email)
        }

        if(!passValor) {
            validaFalla(pass, "Password cannot be empty")
        } else {
            validaOk(pass)
        }
    }

    const validaFalla = (input, msje)  => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector("p")
        aviso.innerText = msje

        const formInput = formControl.querySelector(".form__input")
        const iconError = formControl.querySelector("img")
        
        formControl.className = "form-control falla"
        formInput.className = "form__input disable-ph"
        iconError.className = "icon-error"
    }
    const validaOk = (input, msje)  => {
        const formControl = input.parentElement
        formControl.className = "form-control ok"

        const formInput = formControl.querySelector(".form__input")
        const iconError = formControl.querySelector("img")

        formInput.className = "form__input"
        iconError.className = "icon-ok"
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
})