//  Comportamento de clique no botão "+"
function drawBox() {
    var littleBox = "<div class='little-box'><i onclick='removeBox()' class='fas fa-trash-alt'></i></div>"

    $(".main-box").append(littleBox);
}

// Comportamento de clique no botão "lixeira"
function removeBox() {
    return
}