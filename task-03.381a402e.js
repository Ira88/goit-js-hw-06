const e=document.querySelector("#gallery"),t=[{url:"https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"White and Black Long Fur Cat"},{url:"https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Orange and White Koi Fish Near Yellow Koi Fish"},{url:"https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Group of Horses Running"}].map((e=>'<li><img class ="photo" src ="${image.url}" width ="333" alt ="${image.alt}"></li>')).join("");e.insertAdjacentHTML("beforeend",t);document.querySelectorAll(".photo");e.style.display="flex",e.style.gap="30px",e.style.padding="50px",e.style.justifyContent="centre",e.style.alingnItems="center",e.style.listStyleType="none",e.style.borderRadius="50px",e.style.backgroundColor="darkseagreen";
//# sourceMappingURL=task-03.381a402e.js.map
