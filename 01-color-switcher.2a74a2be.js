const t={startBtn:document.querySelector("[data-start]"),stoptBtn:document.querySelector("[data-stop]"),body:document.querySelector("body")};let e=null;t.startBtn.addEventListener("click",(()=>{t.startBtn.setAttribute("disabled",""),e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stoptBtn.addEventListener("click",(()=>{clearInterval(e),t.startBtn.removeAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.2a74a2be.js.map