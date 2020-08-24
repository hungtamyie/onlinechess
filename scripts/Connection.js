const uuid = PubNub.generateUUID();
var myChannel = "none";
var amHost = "false";
var myName = "none";
var myOpponent = "none";
const pubnub = new PubNub({
    publishKey: "pub-c-878d20d0-0e8b-49c7-81cf-14bd98d67dae",
    subscribeKey: "sub-c-cc9725ba-e32d-11ea-9395-f2758a71b136",
    uuid: uuid
});

function send(type, content){
    pubnub.publish({
        channel : myChannel,
        message : {"sender": uuid, "type": type, "content": content, name: myName}
    }, function(status, response) {
        //Handle error here
        console.log(status)
    });
}

function joinChannel(channel) {
    myChannel = channel;
    pubnub.subscribe({
        channels: [channel],
        withPresence: true
    });
}

pubnub.addListener({
  message: function(event) {
    if (event.message.type == "chat") {
        ui.handleChat(event.message.content, event.message.name);
    }
    if (event.message.type == "start") {
        ui.startGame();
    }
  },
  presence: function(event) {
    console.log(event);
  }
});