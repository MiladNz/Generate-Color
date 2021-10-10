const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const input  = document.querySelector(".my-input");
btn.addEventListener("click" , (e) => {
    
    const color = '#'+Math.floor(Math.random()*16777215).toString(16);
    container.style.backgroundColor = color;
    input.innerHTML = color;
    input.style.color = color;
});
