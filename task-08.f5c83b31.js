document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();var r=e.currentTarget.elements,t=r.email,a=r.password;if(""===t.value||""===a.value)return alert("Заповни всі поля");var l={email:t.value,password:a.value};console.log(l),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.f5c83b31.js.map
