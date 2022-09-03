const bars_container = document.getElementById('bars-container');
const sort_btn = document.getElementById('sort-btn');
const rst_btn = document.getElementById('rst-btn');
const randomize_arr = document.getElementById('randomize-arr-btn');

let arrLength = 10;


function renderBars(array) {
    for(let i = 0; i < arrLength; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] + "px";
        bar.style.backgroundColor = "blue";
        bar.innerText = array[i];
        bars_container.appendChild(bar);
    }
}



sort_btn.addEventListener('click', () => {
    
})

randomize_arr.addEventListener('click', () => {
    let array = Array.from({ length: arrLength }, () => Math.floor(Math.random() * 40));
    bars_container.innerHTML = "";
    renderBars(array);
});
