const submitButton = document.querySelector('button[type="submit"].btn.btn-primary');

submitButton.addEventListener("click", stateCheck);
function stateCheck(){
    let state = document.getElementById("state"); 
    if(state.selectedIndex === 0)
    {
        state.setCustomValidity("Choose a State");
    }
    else
    {
        state.setCustomValidity("");
    }
}

submitButton.addEventListener("click", memebershipCheck);
function memebershipCheck(){
     let b = false;
    const radioButtons = document.querySelectorAll('input[type="radio"][name="membership"]');
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        b = true; 
      }
    }
     
    if (b) {
        radioButtons[0].setCustomValidity("");
      } else {
        radioButtons[0].setCustomValidity("select membership");
      }

}


submitButton.addEventListener("click", termsCheck);
function termsCheck(){
    let agree = document.getElementById("agree");
    if(agree.checked){
        agree.setCustomValidity("");
    }else{
        agree.setCustomValidity("Please agree the terms/conditions");
    }
}

