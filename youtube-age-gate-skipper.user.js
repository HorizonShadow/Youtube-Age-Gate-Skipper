// ==UserScript==
// @name         Skip age gate
// @namespace    http://your.homepage/
// @version      0.1
// @description  Skips age gates on youtube. 
// @author       You
// @match        https://www.youtube.com/watch?v=*
// @grant        none
// ==/UserScript==

var unavailable = document.getElementById("player-unavailable");
if(unavailable) {
    var directVideoLink = "https://www.youtube.com/v/" + window.location.search.split('=')[1]
    var ageGateButton = document.querySelector('#watch7-player-age-gate-content > button');
    var ageGateButtonText = ageGateButton.getElementsByTagName('span')[0];
    ageGateButton.attributes.href.nodeValue = directVideoLink;
    ageGateButtonText.textContent = "Skip age gate";
}
