/* eslint-disable no-magic-numbers */
let log = prompt('Enter your email');
let login;

const emails = {
    user: 'user@gmail.com',
    admin: 'admin@gmail.com'
};

const passwords = {
    uPass: 'UserPass',
    aPass: 'AdminPass'
};


if (log === '' || log === null) {
    alert('Canceled');
} else if (log.length < 5) {
    alert('don\'t know any emails having name length less than 5 symbols');
} else if (log === 'user@gmail.com' || log === 'admin@gmail.com') {
    let pass = prompt('Enter your password');
    if (pass === '' || pass === null) {
        alert('Canceled');
    } else if (log === emails.user && pass === passwords.uPass || log === emails.admin && pass === passwords.aPass) {
        console.log('true');
        login = true;
    } else {
        alert('Wrong password');
    }
}
if (login) {
    let changePass = confirm('Do you want to change your password?');

    if (changePass === null) {
        alert('You have failed the change');
    } else if (changePass === true) {
        let oldPass = prompt('Enter old password');
        if (oldPass === '' || oldPass === null || oldPass !== passwords.uPass || oldPass !== passwords.aPass) {
            alert('Canceled');
            // eslint-disable-next-line max-len
        } else if (log === emails.user && oldPass === passwords.uPass || log === emails.admin && oldPass === passwords.aPass) {
            let newPass = prompt('Enter new password');
            if (newPass === '' || newPass === null) {
                alert('Canceled');
            } else if (newPass.length < 6) {
                alert('It\'s too short password. Sorry.');
            } else {
                let confirmPass = prompt('Enter your new password again');
                if (confirmPass !== newPass) {
                    alert('You wrote the wrong password');
                } else {
                    alert('You have successfully changed your password.');
                }
            }
        }
    }
}