"use strict";
let EventHandler = {
    ShowHideSideBar: function () {
        if (document.getElementById("side-panel").className.indexOf("open") !== -1) {
            document.getElementById("side-panel").className = "side-panel";
            document.getElementById("side-panel").className += " close";
            document.getElementById('show_hide').childNodes[0].className = "fa fa-angle-double-right";
            return;
        }
        document.getElementById("side-panel").className = "side-panel";
        document.getElementById("side-panel").className += " open";
        document.getElementById('show_hide').childNodes[0].className = "fa fa-angle-double-left";
    }
};
window.onload = () => {
    document.getElementById('show_hide').onclick = EventHandler.ShowHideSideBar;
};