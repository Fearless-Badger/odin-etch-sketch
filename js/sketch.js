
// define selectors
const container = document.querySelector(".container");
const size_display = document.querySelector(".control.size");

const red_button = document.querySelector(".control.red");
const green_button = document.querySelector(".control.green");
const blue_button = document.querySelector(".control.blue");
const random_button = document.querySelector(".control.random");

// define game state
let current_size = 16;
let default_color = "darkgray";
let draw_color = "red";
let use_random_color = false;

// random colors, must be length 10
const RANDOM_COLORS = [
    "Aqua", "Aquamarine", "BlueViolet", "Brown", 
    "Chartreuse", "DarkGoldenRod", 
    "DeepPink", "Indigo", "Yellow", "Violet"
];

function reset_board(){
    draw_new_board(current_size);
}

function clear_board(){
    container.innerHTML = '';
}

function draw_new_board(n){
    current_size = n;
    let total_elements = n*n;
    clear_board();
    let child_size = 800 / n;
    for( let i = 0; i < total_elements; i++ ){
        let new_child = document.createElement("div");
        new_child.classList.add("new_child");
        new_child.style.flex = `0 0 ${child_size}px`;
        new_child.style.height = `${child_size}px`;
        new_child.style.backgroundColor = `${default_color}`;
        
        new_child.addEventListener(
            "mouseover",
            () => div_hovered(new_child)
        )

        container.append(new_child);
    }
}   

function set_global_color(color){
    draw_color = color;
}

// change display, according to selectable colors
function invert_random_drawing(){
    if (use_random_color === true){
        red_button.style.backgroundColor = "lightcoral";
        green_button.style.backgroundColor = "green";
        blue_button.style.backgroundColor = "blue";
        red_button.style.color = "white";
        green_button.style.color = "white";
        blue_button.style.color = "white";

        random_button.style.backgroundColor = "rgb(43, 40, 40)";
        use_random_color = false;
    } else {
        red_button.style.backgroundColor = "rgb(43, 40, 40)";
        green_button.style.backgroundColor = "rgb(43, 40, 40)";
        blue_button.style.backgroundColor = "rgb(43, 40, 40)";
        red_button.style.color = "rgb(43, 40, 40)";
        green_button.style.color = "rgb(43, 40, 40)";
        blue_button.style.color = "rgb(43, 40, 40)";

        random_button.style.backgroundColor = "purple";
        use_random_color = true;
    }
}

function set_size(){
    let size = prompt("Enter Size:");

    try{
        size = Number(size);
    } catch (e){
        // pass
    }

    if (!Number.isInteger(size) || size < 1 || size > 100){
        alert("Size must be an integer greater than 0, and less than 100.")
    } else {
        draw_new_board(size);
    }
}

function div_hovered(div){
    if (use_random_color){
        let random_r = Math.floor(Math.random() * 256);
        let random_g = Math.floor(Math.random() * 256);
        let random_b = Math.floor(Math.random() * 256);

        let random_color = `rgb(${random_r}, ${random_g}, ${random_b})`;
        div.style.backgroundColor = random_color;
    } else {    
        div.style.backgroundColor = draw_color;
    }

    let raw_opacity = window.getComputedStyle(div).getPropertyValue("opacity");
    let current_opacity = parseFloat(raw_opacity);
    

    if (current_opacity < 1.0 ){
        div.style.opacity = current_opacity + 0.1;
    }
}

draw_new_board(16);