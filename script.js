const codes = document.querySelectorAll(".code");

codes.forEach((code, index) => {
    if(index === 0){code.focus()}

    code.addEventListener("keyup", (e) => {
        if(Number(e.target.value) !== 0 && !Number(e.target.value)){
            code.value = null;
        }
        if(e.key.toLowerCase() === "backspace"){
            return prevDigit(index);
        }
        if(!e.target.value){return false}
        nextDigit(index);
        if(e.target.value.length > 1){
            e.target.value = e.target.value[e.target.value.length - 1];
        }
    });
});

const nextDigit = (index) => {
    if(index + 1 <= codes.length - 1){
        codes[index + 1].focus();
    }
}
const prevDigit = (index) => {
    if(index - 1 >= 0){
        codes[index - 1].focus();
    }
}
