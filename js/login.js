const loginform = document.querySelector('#login-form');
const id = loginform.querySelector('#id-field');
const password = loginform.querySelector('#password-field');
const contents = document.querySelector('.contents');

const HIDDEN_CLASS = 'hidden';
const ID_KEY = 'userID';

function handleSubmit(e){
    e.preventDefault();
    const userId = id.value;
    const userPassword = password.value;
    if(userId === ''){
        alert('ID를 입력해주세요.');
        return
    } else if(userPassword === ''){
        alert('비밀번호를 입력해주세요.');
        return
    } 
    localStorage.setItem(ID_KEY, userId);
    paintContents();
}
function paintContents(){
    loginform.classList.add(HIDDEN_CLASS);
    contents.classList.remove(HIDDEN_CLASS);
}

const savedUserId = localStorage.getItem(ID_KEY);

if(savedUserId === null){  
    loginform.classList.remove(HIDDEN_CLASS);    
    loginform.addEventListener('submit', handleSubmit);
} else {
    paintContents();
};