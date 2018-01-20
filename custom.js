var elementosCriadosServicos =  '<div class="content_servicos">     <div class="item_servico">  <label class="titulo_servico">Titulo </label>      <p class="descricao_servico"> Descricao do serviço de titulo 1 oferecido pela  empresa detentora dos direitos do site dragonpharma    </p>    </div>  <div class="item_servico">  <label class="titulo_servico">Titulo 2</label>        <p class="descricao_servico">     Descricao do serviço de titulo 2 oferecido pela  empresa detentora dos direitos do site dragonpharma   </p>    </div><div class="item_servico">            <label class="titulo_servico">Titulo 3</label>     <p class="descricao_servico"> Descricao do serviço de titulo 3 oferecido pela empresa detentora dos direitos do site dragonpharma       </p>        </div><div class="item_servico">   <label class="titulo_servico">Titulo 4</label>   <p class="descricao_servico">  Descricao do serviço de titulo 4 oferecido pela   empresa detentora dos direitos do site dragonpharma  </p> </div> </div>';

var divRodape = ' <div class="custom_rodape"> <div class="logo_imagem">   <img src="https://dragonpharmabrasil.com/wp-content/themes/dragon/images/footer-logo.png" title="Home" alt="Home"></div>    <div class="div_texto_rodape">    <p class="texto_rodape">                            © Copyright 2017 @ All Rights Reserved    </p>  </div>  <div class="div_sociais"> <div class="fb"> <i class="fa fa-facebook" aria-hidden="false"></i>     </div> <div class="yout">  <i class="fa fa-youtube-play" aria-hidden="true"></i> </div>    <div class="insta">  <i class="fa fa-instagram" aria-hidden="true"></i>   </div>  </div>   </div>'
                

//Script de inicialização  do site
$(document).ready(function () {
    console.log(" --- Executei Script de Inicialização -- ");
  
    $("head link[rel='stylesheet']").last().after(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`);
    
    $(".aba-redes-sociais").hide();
    
    setTimeout(function(){
        console.log(" --- Reestruturando Rodapé --- "); 
        $(".rodape-wrapper .selos-rodape .dir").remove();
        $("body").append(divRodape);
        console.log(" --- FINALIZADO SCRIPT --- "); 
    }, 1000)
})

