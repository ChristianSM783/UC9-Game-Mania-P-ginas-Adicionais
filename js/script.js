let email = document.getElementById("campo e-mail");

function mostrarPopup() {
    window.alert("Hello Word");
}

function enviarEmail() {
    let emailDigitado = email.value;
    console.log(emailDigitado)
}
// Função botão
jQuery('[data-app="product.buy-button"]').on('click', function() {
    var $productId = jQuery(this).attr('data-product');
    var $dataSession = jQuery("html").attr("data-session");
    var self = this;
    jQuery.ajax({
      method: "POST",
      url: "/web_api/cart/",
      contentType: "application/json; charset=utf-8",
      data: '{"Cart":{"session_id":"'+$dataSession+'","product_id":"'+$productId+'","quantity":1}}'
    }).done(function( response, textStatus, jqXHR ) {
      jQuery(self).text("Adicionado!")
     var qtdCart = parseInt(jQuery("[data-cart=amount]").html());
     jQuery("[data-cart=amount]").html(qtdCart + 1);
    }).fail(function( jqXHR, status, errorThrown ){
      var response = jQuery.parseJSON( jqXHR.responseText );
      // Exibe a mensagem de erro (estoque insuficiente, etc)
      alert(response.causes[0])
    });
  })