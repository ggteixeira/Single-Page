//  Comportamento de clique no botão "+"
function drawBox() {
    var littleBox = "<div class='little-box'> <span class='btn-remover'><i class='fas fa-trash-alt'></i> </span></div>"

    $(".main-box").append(littleBox);
}

// Comportamento de clique no botão "lixeira"

$('.main-box').on('click', '.btn-remover', function(){
    $(this).parent().remove();
})

