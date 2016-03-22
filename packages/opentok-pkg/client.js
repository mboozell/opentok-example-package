Template.example.helpers({
    buttonName: function () {
        return "Button";
    }
});

Template.example.events({
    'click #button': function (event, template) {
        Meteor.call('exampleMethod', data, function (error, response) {
            // do something with response
        });
    }
});

Template.example.onCreated(function () {
    var ready = new ReactiveVar(false);
    // load reactive vars in here
    //
    // reactive vars used in helper functions or Template.autorun
    // functions get automatically reloaded on reactive var changes
});

Template.example.onRendered(function () {
    // load external js in here probably
});