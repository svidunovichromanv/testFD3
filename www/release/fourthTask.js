'use strict';
function reqListener4() {
    if (this.status !== 200) {
        document.getElementsByTagName('div')[0].innerHTML = this.statusText;
    } else { // 200 OK
        var txt = this.responseText;
        console.log(txt);
        var arr = txt.match(/(['"])(\\.|.)*?(\1)/g);
        for (var i=0; i<arr.length; i++){
            console.log(arr[i]);
        }
    }
}
var oReq4 = new XMLHttpRequest();
oReq4.onload = reqListener4;
oReq4.open("get", "https://fe.it-academy.by/Examples/test_JSE.txt", true);
oReq4.send();