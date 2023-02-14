const t=document.querySelector("#validation-input");t.addEventListener("blur",(a=>{a.target.value.length==t.getAttribute("data-length")?(t.classList.add("valid"),t.classList.contains("invalid")&&t.classList.remove("invalid")):(t.classList.contains("valid")&&t.classList.remove("valid"),t.classList.add("invalid"))}));
//# sourceMappingURL=task-06.e66acff6.js.map
