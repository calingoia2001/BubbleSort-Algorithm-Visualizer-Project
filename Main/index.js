const bars_container = document.getElementById('bars-container');
const sort_btn = document.getElementById('sort-btn');
const rst_btn = document.getElementById('rst-btn');
const randomize_arr = document.getElementById('randomize-arr-btn');

let arrLength = 15;

function randomUnsortedArray() {
    unsortedArr = Array.from({ length: arrLength }, () => Math.floor(Math.random() * 40));
}

function renderBars(array) {
    for(let i = 0; i < arrLength; i++) {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = array[i] + "px";
        bar.style.backgroundColor = "lightgreen";
        bar.innerText = array[i];
        bars_container.appendChild(bar);
    }
}

function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms))};

async function bubbleSort(array) {
    let bars = document.getElementsByClassName("bar");
    for(let i = 0; i < arrLength; i++) {
        for(let j = 0; j < arrLength; j++) {
            if(array[j] > array[j + 1]) {

                /*for(let k = 0 ; k < bars.length; k++) {
                    if(k !== j && k !== j + 1) {
                        bars[k].style.backgroundColor = "white";
                    }
                } */

                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                bars[j].style.height = array[j] * 10 + "px";
                bars[j].style.backgroundColor = "lightgreen";
                bars[j].innerText = array[j];

                bars[j + 1].style.height = array[j + 1] * 10 + "px";
                bars[j + 1].style.backgroundColor = "lightgreen";
                bars[j + 1].innerText = array[j + 1];
                await sleep(100);
            }
        }
        await sleep(100);
    }
    return array;
}

randomize_arr.addEventListener('click', () => {
    randomUnsortedArray();
    bars_container.innerHTML = ""; 
    renderBars(unsortedArr);
});

sort_btn.addEventListener('click', () => {
    bubbleSort(unsortedArr);
    console.log(unsortedArr);
})

rst_btn.addEventListener('click', () => {
    bars_container.innerHTML = "";
})
