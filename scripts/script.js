// MINIMIZE DIVS FUNCTION // 

function minimize(el, el2) {
    document.getElementById(el).style.display = 'none';
    document.getElementById(el2).style.display = 'block';
}


// CHECK DATA FROM REGISTER INPUT//

function checkInfo() {

    var id = parseInt(document.getElementById('id-info').value);
    var fname = document.getElementById('fname-info').value;
    var lname = document.getElementById('lname-info').value;
    var age = parseInt(document.getElementById('age-info').value);
    var email = document.getElementById('email-info').value;

    if (id > 0){
        if (fname.length > 3){
            if (lname.length > 3){
                if (age > 12){
                    if (email.length > 8){
                        minimize('register-div', 'second-register-div');
                    }else{
                        alert("Invalid E-mail!");
                    }
                }else{
                    alert("Invalid Age!");
                }
            }else{
                alert("Invalid Last Name!");
            }
        }else{
            alert("Invalid First Name!");
        }
    }else{
        alert("Invalid ID!");
    }           
}