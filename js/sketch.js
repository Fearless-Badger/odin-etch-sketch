
// define container
const container = document.querySelector(".container");

// define game state
let current_size = 0;
let default_color = "darkgray";
let draw_color = "red";

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
    div.style.backgroundColor = draw_color;
}

draw_new_board(16);