const bars_container = document.getElementById('bars-container');
const sort_btn = document.getElementById('sort-btn');
const rst_btn = document.getElementById('rst-btn');
const home_btn = document.getElementById('home-btn');
const randomize_arr = document.getElementById('randomize-arr-btn');

function randomUnsortedArray() {
    let arrLength = document.getElementById('barsRange').value;
    unsortedArr = Array.from({ length: arrLength }, () => Math.floor(Math.random() * 70));
}

function renderBars(array) {
    for(let i = 0; i < array.length; i++) {
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
    let speed = document.getElementById('speedRange').value;
    for(let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

                bars[j].style.height = (array[j] * 10 + 5) + "px";
                bars[j].style.backgroundColor = "lightgreen";
                bars[j].innerText = array[j];

                bars[j + 1].style.height = (array[j + 1] * 10 + 5) + "px";
                bars[j + 1].style.backgroundColor = "lightgreen";
                bars[j + 1].innerText = array[j + 1];
                await sleep(speed);
            }
        }
        await sleep(speed);
    }
    return array;
}

/*async function selectionSort(array) {
    let bars = document.getElementsByClassName("bar");
    let speed = document.getElementById('speedRange').value;
    for(let i = 0 ; i < array.length; i++) {
        let min = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }
        if(min != i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;

            bars[i].style.height = (array[i] * 10 + 5) + "px";
            bars[i].style.backgroundColor = "lightgreen";
            bars[i].innerText = array[i];

            bars[min].style.height = (array[min] * 10 + 5) + "px";
            bars[min].style.backgroundColor = "lightgreen";
            bars[min].innerText = array[min];
            
            await sleep(speed);
        }
        await sleep(speed);
    }
    return array;
}*/

randomize_arr.addEventListener('click', () => {
    randomUnsortedArray();
    bars_container.innerHTML = ""; 
    renderBars(unsortedArr);
    sort_btn.style = "show";
    document.getElementById('barsRange').style = "show";
    document.getElementById('speedRange').style = "show";
    document.getElementById('barsText').style = "show";
    document.getElementById('speedText').style = "show";
});

sort_btn.addEventListener('click', () => {
    bubbleSort(unsortedArr);
})

rst_btn.addEventListener('click', () => {
    bars_container.innerHTML = "";
})

home_btn.addEventListener('click', () => {
    location.href = "../MainPage/Main.html";
})