const uuid = PubNub.generateUUID();
const pubnub = new PubNub({
    publishKey: "pub-c-878d20d0-0e8b-49c7-81cf-14bd98d67dae",
    subscribeKey: "sub-c-cc9725ba-e32d-11ea-9395-f2758a71b136",
    uuid: uuid
});

const button = document.getElementById('sendChatButton');

button.addEventListener('click', () => {
    pubnub.publish({
        channel : "pubnub_onboarding_channel",
        message : {"sender": uuid, "content": "Hello From JavaScript SDK"}
    }, function(status, response) {
        //Handle error here
    });
});

pubnub.subscribe({
    channels: ['pubnub_onboarding_channel'],
    withPresence: true
});

pubnub.addListener({
    message: function(event) {
    let pElement = document.createElement('p');
    pElement.appendChild(document.createTextNode(event.message.content));
    document.body.appendChild(pElement);
  },
  presence: function(event) {
    let pElement = document.createElement('p');
    pElement.appendChild(document.createTextNode(event.uuid + " has joined. That's you!"));
    document.body.appendChild(pElement);
  }
});

pubnub.history(
  {
    channel: 'pubnub_onboarding_channel',
    count: 10,
    stringifiedTimeToken: true,
  },
  function (status, response) {
    let pElement = document.createElement('h3');
    pElement.appendChild(document.createTextNode('historical messages'));
    document.body.appendChild(pElement);

    pElement = document.createElement('ul');
    let msgs = response.messages;
    for (let i in msgs) {
      msg = msgs[i];
      let pElement = document.createElement('li');
      pElement.appendChild(document.createTextNode('sender: ' + msg.entry.sender + ', content: ' + msg.entry.content));
      document.body.appendChild(pElement);
    }
  }
);