
// define container
const container = document.querySelector(".container");

// define game state
let selected_color = "black";
let default_color = "blue";


function clear_board(){
    container.innerHTML = '';
}

function draw_new_board(n){
    let total_elements = n*n;
    clear_board();
    let child_size = 800 / n;
    for( let i = 0; i < total_elements; i++ ){
        let new_child = document.createElement("div");
        new_child.classList.add("new_child");
        new_child.style.flex = `0 0 ${child_size}px`;
        new_child.style.height = `${child_size}px`;
        new_child.style.backgroundColor = `${default_color}`;
        container.append(new_child);
    }
}   



draw_new_board(16);