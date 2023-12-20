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

// aulbm bage

var cdImg = document.querySelector('.album-sec .container .left-part .frist-img')
console.log(cdImg)
let degress = 0
let interval = setInterval(imgMove , 60)
function imgMove(){
    degress += 1;
    cdImg.style.transform = `rotate(${degress}deg)`;
}
// start with cards 




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
