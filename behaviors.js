//  Comportamento de clique no botão "+"
function drawBox() {
    var littleBox = "<div class='little-box'> <span class='btn-remover'><i class='fas fa-trash-alt'></i> </span></div>"

    $(".main-box").append(littleBox);
}

// Comportamento de clique no botão (AZUL) "+"
function drawBoxBlue() {
    var littleBoxBlue = "<div class='little-box-blue'><span class='btn-remover'><i class='fas fa-trash-alt'></i></span></div>"
    $(".main-box-blue").append(littleBoxBlue);
}


// Comportamento de clique no botão "lixeira" (VERDE)

$('.main-box').on('click', '.btn-remover', function(){
    $(this).parent().remove();
})

// Comportamento de clique no botão "lixeira" (AZUL)
$('.main-box-blue').on('click', '.btn-remover', function(){
    $(this).parent().remove();
})

// SINGLE PAGE

// Clique no botão VERDE
$(".verde-btn").on('click', function(){
    $(".main-box-blue").css("display", "none");
    $(".main-box").css("display", "inline-block");
})

// Clique no botão AZUL
$(".azul-btn").on('click', function(){
    $(".main-box").css("display", "none");
    $(".main-box-blue").css("display", "inline-block")

})