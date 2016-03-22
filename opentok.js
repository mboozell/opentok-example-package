if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

    Template.example.helpers({
        buttonName: function() {
            return "Button";
        }
    });

    Template.example.events({
        'click #button': function(event, template) {
            Meteor.call('exampleMethod', data, function(error, response) {
                // do something with response
                console.log("clicked button");
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

    Template.example.onRendered(function() {
        // load external js in here probably
    });

/*  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
*/}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
