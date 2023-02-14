 let counterValue = 0;
 let counter = document.querySelector('#value');
 const minusBtn = document.querySelector('button[data-action="decrement"]');
 const plusBtn = document.querySelector('button[data-action="increment"]');
 minusBtn.addEventListener('clik', () => {
     counterValue -= 1;
     counter.textContent = counterValue;
 });
 plusBtn.addEventListener('clik', () => {
     counterValue += 1;
     counter.textContent = counterValue;
 })

