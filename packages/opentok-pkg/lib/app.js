if(Meteor.isClient){
  (function() {
    var $, apiKey,
        sessionId,
        token,
        data;

    var SAMPLE_SERVER_BASE_URL = 'http://localhost:3000';
    $ = window.jQuery || window.Zepto || window.$;

    $(document).ready(function() {
      // Make an Ajax request to get the OpenTok API key, session ID, and token from the server
      $.get(SAMPLE_SERVER_BASE_URL + '/session', function(res) {
        console.log("calling .ready..." + SAMPLE_SERVER_BASE_URL);

        Meteor.call('exampleMethod', data, function (error, response) {
            // do something with response
            console.log("exampleMethod replied = " + error + " :: " + response);
            //apiKey = "45499332";//res.apiKey;
            //sessionId = "1_MX40NTQ5OTMzMn5-MTQ1ODEzNzU5NTc1MH5QR256Q29RaEhUbHZuYU5vNk9OYzBldFJ-UH4"; // res.sessionId;
            //token = "18933293a5a9e54a6b22291836a17369a214198b";// res.token;
        });

        //apiKey = "45499332";//res.apiKey;
        //sessionId = "1_MX40NTQ5OTMzMn5-MTQ1ODEzNzU5NTc1MH5QR256Q29RaEhUbHZuYU5vNk9OYzBldFJ-UH4"; // res.sessionId;
        //token = "18933293a5a9e54a6b22291836a17369a214198b";// res.token;

        //initializeSession();
      });
    });

    function initializeSession() {
      var session = OT.initSession(apiKey, sessionId);

      // Subscribe to a newly created stream
      session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        });
      });

      session.on('sessionDisconnected', function(event) {
        console.log('You were disconnected from the session.', event.reason);
      });

      // Connect to the session
      session.connect(token, function(error) {
        // If the connection is successful, initialize a publisher and publish to the session
        if (!error) {
          var publisher = OT.initPublisher('publisher', {
            insertMode: 'append',
            width: '100%',
            height: '100%'
          });

          session.publish(publisher);
        } else {
          console.log('There was an error connecting to the session: ', error.code, error.message);
        }
      });
    }
  }).call(this);
}
