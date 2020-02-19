function signOut() {
    
    const auth2 = gapi.auth2.getAuthInstance();
    
    auth2.signOut().then(function () {

        window.location.reload(true)

        console.log('User signed out.');

    });

}
// signOut()