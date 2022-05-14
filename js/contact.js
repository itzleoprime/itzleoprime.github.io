function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://ptb.discord.com/api/webhooks/969870109889929246/_e4uji0wbLKPyjUhGvDEa90f8Nn_pxCbLYEIVRslQpJ3mWuvCQrzkcsCLTVD5hY2nA_z");
    request.setRequestHeader('content-type', 'application/json'); 

    var aut = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;

    var myEmbed = {
    author: {
        name: email
    },
    title: aut,
    description: msg,
    color: hexToDecimal("#00FFFF")
    }

    var params = {
    username: "Message",
    embeds: [ myEmbed ]
    }

    request.send(JSON.stringify(params));
    window.alert("Successfuly sent! " + aut);

    function hexToDecimal(hex) {
        return parseInt(hex.replace("#",""), 16)
    }
}