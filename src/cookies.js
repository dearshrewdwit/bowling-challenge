
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') { c = c.substring(1); }
        if (c.indexOf(name) === 0) { return c.substring(name.length,c.length); }
    }
    return "";
}

function checkCookie() {
    var username = getCookie("username");
    var total = getCookie("total");
    if (username !== "") {
      // thermostat.temp = getCookie("temp");
      // thermostat.mode = getCookie("mode");
      alert("Welcome again " + username + "Your Bowling Lane has been loaded (" + total +"pts) from your previous session.");
    } else {
      username = prompt("Please enter your name:", "");
        if (username !== "" && username !== null) {
          setCookie("username", username, 365);
        }
    }
}
