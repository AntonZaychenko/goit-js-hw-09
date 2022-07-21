import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';



const btnStart = document.querySelector('button[data-start]');
const timeInput = document.querySelector('#datetime-picker');
const spanDays = document.querySelector('.timer [data-days]');
const spanHours = document.querySelector('.timer [data-hours]');
const spanMinutes = document.querySelector('.timer [data-minutes]');
const spanSeconds = document.querySelector('.timer [data-seconds]');

let selectedDate = 0;
let timerId = null;


btnStart.disabled = true

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        selectedDate = selectedDates[0].getTime()
        if (selectedDate < new Date()) {
           window.alert('Please choose a date in the future');
        } else {
            btnStart.disabled = false
            
        };
    },
  };
flatpickr(timeInput, options );


    
btnStart.addEventListener('click', getTimerStart)

function getTimerStart() {

  timerId = setInterval(() => {
      let currentDate = new Date()

      const difDate = selectedDate - new Date();

      const convertObj = convertMs(difDate);

       showDate(convertObj);

       getTimerStop();
   
   }, 1000)
  }

   function getTimerStop() {
    
    if(spanDays.textContent === '0 ' && 
      spanHours.textContent === '0' &&
      spanMinutes.textContent === '0' &&
      spanSeconds.textContent === '0') {

        clearInterval(timerId)
      }
   }


   function showDate(time) {
    spanDays.textContent = (time.days);
   spanHours.textContent = (time.hours);
   spanMinutes.textContent = (time.minutes);
   spanSeconds.textContent = (time.seconds);
}





function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  
  const days = Math.floor(ms / day);
 
  const hours = Math.floor((ms % day) / hour);
  
  const minutes = Math.floor(((ms % day) % hour) / minute);
  
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

