document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,password:r}}=e.currentTarget;if(""===t.value||""===r.value)return alert("Заповни всі поля");const n={email:t.value,password:r.value};console.log(n),e.currentTarget.reset()}));
//# sourceMappingURL=task-08.cc03ec20.js.map
