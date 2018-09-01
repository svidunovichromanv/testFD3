'use strict';
function PoemButton1(buttonCaption, alertText) {
    this._buttonCaption=buttonCaption;
    this._alertText=alertText;
    this._elem = null;
}
PoemButton1.prototype.addBtn = function() {
    this._elem = document.createElement('button');
    this._elem.textContent = this._buttonCaption + "";
    this._elem.addEventListener('click', ()=>{alert(this._alertText)});
    document.body.appendChild(this._elem);
};
function reqListener1() {
    if (this.status === 200) { // 200 OK
        var obj = JSON && typeof(JSON.stringify) === 'function'
            ? JSON.parse(this.responseText)
            : eval("(" + this.responseText + ")");
        for (var i = 0; i < obj.length; i++){
            var newBtn = new PoemButton1(obj[i].buttonCaption, obj[i].alertText);
            newBtn.addBtn();
        }
    }
    else {
        document.getElementsByTagName('div')[0].innerHTML = this.statusText;
    }
}
var oReq1 = new XMLHttpRequest();
oReq1.onload = reqListener1;
oReq1.open("get", "http://fe.it-academy.by/Examples/test_JSE.json", true);
oReq1.send();