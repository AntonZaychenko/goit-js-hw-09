const myForm = document.querySelector('.form')
myForm.addEventListener('submit', createEl)

const delayEl = document.querySelector('input[name = delay]')
const stepEl = document.querySelector('input[name = step]')
const amountEl = document.querySelector('input[name = amount]')

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}


function createEl(e) {
e.preventDefault();

let waitDelayEl = Number(delayEl.value);
let waitStepEl = Number(stepEl.value);
let amount = Number(amountEl.value);


for (let i = 1; i <= amount; i += 1 ) {
  createPromise(i, waitDelayEl )
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  waitDelayEl += waitStepEl
}

}
 














