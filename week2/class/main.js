
function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
/*
function isString(subject) {
    var regex = /^[a-zA-Z]+$/;
    return regex.test(subject);
}

function isSubject(subject) {
    if((subject.length>40) && isString(subject)) {
        return subject;
    }

}
*/
$('button').click(function(event) {
    event.preventDefault();
    console.log("Click button");
    let email = $('#email').val();
    let subject = $('#subject').val();
    let message = $('#message').val();

    if(isEmail(email)) {
        $('.area-validate').text('Email is fine');
    }
    else if(subject != "") {
        $('.subject-validate').text('Subject is fine');        
    }
    else {
        $('.subject-validate').text('something is not fine');        
    }
});