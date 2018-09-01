'use strict';
class PoemButton {
    constructor(buttonCaption, alertText){
        this._buttonCaption=buttonCaption;
        this._alertText=alertText;
        this._elem = null;
        let self = this;
        function addBtn () {
            self._elem = document.createElement('button');
            self._elem.textContent = `${self._buttonCaption}`;
            self._elem.addEventListener('click', ()=>{alert(`${self._alertText}`)});
            document.body.appendChild(self._elem);
        }
        addBtn();
    }
}
function reqListener2() {
    if (this.status === 200) { // 200 OK
        const obj = JSON && typeof(JSON.stringify) === 'function'
            ? JSON.parse(this.responseText)
            : eval("(" + this.responseText + ")");
        for (let i = 0; i < obj.length; i++){
            let newBtn = new PoemButton(obj[i].buttonCaption, obj[i].alertText);
        }
    }
    else {
        document.getElementsByTagName('div')[0].innerHTML = this.statusText;
    }
}
const oReq2 = new XMLHttpRequest();
oReq2.onload = reqListener2;
oReq2.open("get", "http://fe.it-academy.by/Examples/test_JSE.json", true);
oReq2.send();