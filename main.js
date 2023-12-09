const pagesLi = document.querySelector('.pages');
let subMenu = null; 

function menu() {
  if (!subMenu) {
    subMenu = document.createElement('div');
    const ulElement = document.createElement('ul');

    subMenu.className = 'sub-menu';
    ulElement.className = 'flex-box-v';

    subMenu.appendChild(ulElement);
    ulElement.innerHTML = `
      <li><a href="#Alubms">Alubms</a></li>
      <li><a href="#Events">Events</a></li>
      <li><a href="#Contact">Contact</a></li>
    `;

    pagesLi.appendChild(subMenu);
  } else {
    subMenu.style.display = subMenu.style.display === 'none' ? 'block' : 'none';
  }
}
pagesLi.addEventListener('click', () => {
    menu();
})

// start with cards 

const cardsContainer = document.querySelector('.cards')
const angelRight = document.querySelector('.scrole-card-2')
const angelLeft = document.querySelector('.scrole-card-1')
const actions = [
    () => {
        cardsContainer.style.marginLeft = '-60%'  
    },
    () => {
        cardsContainer.style.marginLeft = '-160%'
      // Add the code for your second action here
    },
    () => {
        cardsContainer.style.marginLeft = '-246%'
      // Add the code for your third action here
    },
    () => {
        cardsContainer.style.marginLeft = '-334%'
        // Add the code for your third tion here
    },
    () => {
        cardsContainer.style.marginLeft = '-420%'
        // Add the code for your third action here
    }
    
];
  
let currentIndex = 0;
  
function handleClick() {
    const currentAction = actions[currentIndex];
    if (currentAction) {
      currentAction(); // Execute the current action
      currentIndex = (currentIndex + 1) % actions.length; // Move to the next action
    }
}

function angelLeftScrolle(){
    if(cardsContainer.style.marginLeft = '-58%'){
        cardsContainer.style.marginLeft = '4%'
    } else {
        angelScroleLeft();
    }

}


angelRight.addEventListener('click',handleClick)  

const actions2 = [
    () => {
        angelLeftScrolle();
    },
    () => {
        cardsContainer.style.marginLeft = '-334%'
      // Add the code for your first action here
    },
    () => {
        cardsContainer.style.marginLeft = '-246%'
        // Add the code for your first action here
    },
    () => {
        cardsContainer.style.marginLeft = '-160%'
        // Add the code for your first action here
    },
    () => {
        cardsContainer.style.marginLeft = '-60%'
        // Add the code for your first action here
    },
    () => {
        cardsContainer.style.marginLeft = '4%'
        // Add the code for your first action here
    }
    
];

let currentIndex2 = 0;

function handleClick2() {
    const currentAction2 = actions2[currentIndex2];
    if (currentAction2) {
      currentAction2(); // Execute the current action
      currentIndex2 = (currentIndex2 + 1) % actions2.length; // Move to the next action
    }
}

angelLeft.addEventListener('click',handleClick2);
// **** start with form ****

const form = document.getElementById('form')
const usearName = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const subject = document.getElementById('subject')
const messagee = document.querySelectorAll('.message')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInput();
})

function checkInput(){
    const usearNameValue = usearName.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const subjectValue = subject.value;
    // name
    if(usearNameValue === '' ){
        setError(usearName,'Name cannot be blank',0)
    
    }else if(usearNameValue > 30){
        setError(phone,'Name cannot be more than 30 charset',0)
    }
    else{
        setSuccess(usearName,'',0)
    }
    //email
    if(emailValue === ''){
        setError(email,'Email cannot be blank',1)
    }
    else if (!isEmail(emailValue)) {
		setError(email, 'Not a valid email',1);
    }    
    else{
        setSuccess(email,'',1)
    }
    //phone
    if(phoneValue === ''){
        setError(phone,'Phone cannot be blank',2)
    }else if(phoneValue < 11){
        setError(phone,'phone cannot be less than 11 numbers',2)
    }
    else{
        setSuccess(phone,'',2)
    }
    // subject
    if(subjectValue === ''){
        setError(subject,'Subject cannot be blank',3)
    }else{
        setSuccess(subject,'',3)
    }
}
function setSuccess(input,message,i){
    input.className = 'success'
    messagee[i].innerHTML = message
}
function setError (input,message,i){
    input.className = 'error'
    messagee[i].innerHTML = message
}
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}







