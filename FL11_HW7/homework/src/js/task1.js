let email = prompt('Enter email');
let input_password = '';
let validation = false;

//Email validation
if(email) {
    if(email.length >= 6) {
        if(email === 'user@gmail.com' || email === 'admin@gmail.com') {
            //Password validation
            input_password = prompt('Enter password');
            if(input_password) {
                switch (email) {
                    case 'user@gmail.com':
                        if (input_password === 'UserPass') {
                            validation = true;
                        } else {
                            alert('Wrong password');
                        }
                        break;

                    case 'admin@gmail.com':
                        if (input_password === 'AdminPass') {
                            validation = true;
                        } else {
                            alert('Wrong password');
                        }
                        break;

                    default:
                        alert('Wrong password');
                }
            } else {
                alert('Canceled');
            }
        } else {
            alert('I don’t know you');
        }
    } else {
        alert('I don\'t know any emails having name length less than 6 symbols');
    }
} else {
    alert('Canceled');
}

//Start this block if we have correct email and password
//Block ask confirmation to change password
if (validation) {
    let change_password = confirm('Do you want to change your password?')
    validation = false;

    if (change_password) {
        input_password = prompt('Enter old password');
        if(input_password) {
            switch (email) {
                case 'user@gmail.com':
                    if (input_password === 'UserPass') {
                        validation = true;
                    } else {
                        alert('Wrong password');
                    }
                    break;

                case 'admin@gmail.com':
                    if (input_password === 'AdminPass') {
                        validation = true;
                    } else {
                        alert('Wrong password');
                    }
                    break;

                default:
                    alert('Wrong password');
            }
        } else {
            alert('Canceled');
        }
    } else {
        alert('You have failed the change.');
    }
}

//Start this block if user identity and want change password
//Dont set new password
if (validation) {
    let new_password = prompt('Enter new password');
    if(new_password) {
        if (new_password.length >= 5) {
            let repeat_password = prompt('Repeat password')
            if (new_password === repeat_password) {
                alert('You have successfully changed your password.');
            } else {
                alert('You wrote the wrong password.');
            }
        } else {
            alert('It’s too short password. Sorry.');
        }
    } else {
        alert('It’s too short password. Sorry.');
    }
}