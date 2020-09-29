var data = { 
		UserPoolId : _config.cognito.userPoolId,
        ClientId : _config.cognito.clientId
    };
    var userPool = new AmazonCognitoIdentity.CognitoUserPool(data);
    var cognitoUser = userPool.getCurrentUser();
	console.log(cognitoUser);
	window.onload = function(){
    if (cognitoUser != null) {
        cognitoUser.getSession(function(err, session) {
            if (err) {
                alert(err);
                return;
            }
            console.log('session validity: ' + session.isValid());
			//Set the profile info
			cognitoUser.getUserAttributes(function(err, result) {
				if (err) {
					console.log(err);
					return;
				}
				console.log(result);
				document.getElementById("user_welcome").innerHTML = 'Welcome, ' + result[2].getValue() + '!';
				document.getElementById("user_welcome").setAttribute('href', '#');
				document.getElementById("Upload_Button").setAttribute('href', 'upload_menu.html');
				document.getElementById("log_out").classList.remove("hidden");
				document.getElementById("Upload_Button").removeAttribute("onClick");
			});			
			
        });
    }
}
	
		function logOut(){
	    if (cognitoUser != null) {
          cognitoUser.signOut();
			location.reload();
        }
	}
	function login_request(){
		alert('Please, login or register to upload replays');
	}