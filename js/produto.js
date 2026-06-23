// criando variaveis

// váriaveis que alteram de valor
let preco_promocional= 189.90;
let preco_antigo= 200.00;
let desconto= "5%";
let quantidade= 10;

//váriaveis que são consantes/ não alteram o valor
const nomeProduto="vidro comum incolor 2200x1600mm";
const espessura= "3mm 4mm 6mm";
const avaliacoes=5;
const img_principal= "/assets/vidrocomum.png";
const img_miniaturas=["/assets/image.png", "/assets/vidrocomum.png"];
const descricao="Transparência e praticidade para seu projeto. Ideal para janelas, portas, móveis e vitrines, o vidro comum incolor proporciona excelente passagem de luz natural, acabamento discreto e ótimo custo-benefício para aplicações residenciais e comerciais.";
let btn_add_carrinho;
let btn_comprar;

// CÓDIGO PARA PREENCHER AS IMAGENS NO HTML

//CRIANDO UMA VÁRIAVEL PARA RECONHER O ID DA IMAGEM LATERAL

const lateral= document.getElementById("img-lateral");



//LENDO A QUANTIDADE DE IMAGENS CADASTRADAS E CRIANDO AS TAGS IMG

/* ForEach: percorre uma lista de itens até o final
- ele percorre o primeiro, se ver que tem outro, ele lê o outro
- quando chega no ultimo ele para de ler e finaliza a execução
- img_miniatura é chamado pq é ele que contém a lista de imagens
- depois o ForEach é chamado para ler a lista
- e dentro do ForEach passamos o tipo de documento lido (imagem)
 */



//lendo a quantidade deimagens cadastradas e riando as tags img

img_miniaturas.forEach(imagem =>{
    // CRIANDO UMA VÁRIAVEL QUE CRIE A TAG IMG NA DIV DO HTML
    const img = document.createElement("img");

    img.src=imagem;//ele joga o caminho da imagem na tag img
    img.classList.add("img-lateral");//jogar a tag criada na div
    
    /*criando codigo que substitui a imagem
     principal pela miniatura clicada */
    img.addEventListener("click", () => {
        document.getElementById("img-maior").src = 
           imagem;
    }); //ver se a pessoa clicou na imgaem
    lateral.appendChild(img);

});//fechar o for each

//preencher a imagem principal
document.getElementById("img-maior").src= img_principal;

//------------------------------preencher dados do produto------------------------------//
document.getElementById("nome-produto").textContent=nomeProduto ;