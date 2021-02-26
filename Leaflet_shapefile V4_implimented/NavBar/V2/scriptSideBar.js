"use strict";
let EventHandler = {
    ShowHideSideBar: function () {
        if (document.getElementById("dialog").className.indexOf("open") !== -1) {
            document.getElementById("dialog").className = "dialog";
            document.getElementById("dialog").className += " close";
            document.getElementById('show_hide').childNodes[0].className = "fa fa-angle-double-right";
            return;
        }
        document.getElementById("dialog").className = "dialog";
        document.getElementById("dialog").className += " open";
        document.getElementById('show_hide').childNodes[0].className = "fa fa-angle-double-left";
    },
    // ShowHideSideDiv:()=>{
    //     if (document.querySelector(".dialog").className.indexOf("open") !== -1) {
    //         document.getElementById("dialog").className += "close";
    //         console.log(document.getElementById("dialog"))
    //         return;
    //     }
    //     document.getElementById("dialog").className += "open";
    //     console.log(document.getElementById("dialog"))
    // }
};
window.onload = () => {
    document.getElementById('show_hide').onclick = EventHandler.ShowHideSideBar;
};