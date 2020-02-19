/**
 * Sample JavaScript code for youtube.activities.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#javascript
 */

//  $(window).on('load', function () {
//      $('.loader').fadeOut('slow');
//  })

function authenticate() {

    return gapi.auth2.getAuthInstance()
        .signIn({
            scope: 'https://www.googleapis.com/auth/youtube.readonly  https://www.googleapis.com/auth/youtube.force-ssl'
        })
        .then(function loadClient() {

                console.log('Sign-in successful');

                gapi.client.setApiKey('AIzaSyDBbzi9ZvLIWQLGgRebzCy4ZI_0wGZyqTo');
                return gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
                    .then(function () {
                            console.log('GAPI client loaded for API');
                        },
                        function (err) {
                            console.error('Error loading GAPI client for API', err);
                        });

            },
            function (err) {
                console.error('Error signing in', err);
            });

}

// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {

    return gapi.client.youtube.activities.list({

        "part": "snippet,contentDetails",
        "maxResults": 3,
        "mine": true

    })
    .then(function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
    },
        function (err) { 
            console.error("Execute error", err); 
        });
}

function execute1() {

    return gapi.client.youtube.channels.list({

        "part": "snippet,contentDetails,statistics",
        "mine": true

    })
    .then(function (response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
        const containerData = response.result.items[0]

        const container = document.getElementById('container')

        container.innerHTML = `<img src="${containerData.snippet.thumbnails.default.url}">`

    },
    function (err) { 
        console.error("Execute error", err); 
    });

}

function execute2() {
    return gapi.client.youtube.commentThreads.list({

        'part': 'snippet,replies',
        'videoId': 'RxCb8YRYFbM',
        'order': 'relevance',
        'maxResults': 10

    })
        .then(function (response) {
            // Handle the results here (response.result has the parsed body).
            console.log('Response', response);
        },
        function (err) {
            console.error('Execute error', err); 
        });
}

// Load OAuth 2.0 Client
gapi.load('client:auth2', function () {
    gapi.auth2.init({
        client_id: '5351956383-d7j3ounhb0jsq71p0rgn319pidl9rl4a.apps.googleusercontent.com'
    });
});