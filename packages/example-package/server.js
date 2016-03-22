var OpenTok = Npm.require('opentok'),
    apiKey = "45499332",
    apiSecret = "18933293a5a9e54a6b22291836a17369a214198b",
    openTok = new OpenTok(apiKey, apiSecret);

Meteor.methods({
    exampleMethod: function(data) {
        syncMethod = Meteor.wrapAsync(openTok.method);
        response = syncMethod(method);
        return response;
    }
})