/**
 * @file
 * Placeholder file for custom sub-theme behaviors.
 *
 */
(function ($, Drupal) {

  /**
   * Use this behavior as a template for custom Javascript.
   */
  Drupal.behaviors.azteca = {
    attach: function (context, settings) {
      //alert("I'm alive!");
      $('#block-secondarymenuhome .card-item > a, nav.main .cuenta a').attr('target','_blank');
      $('#block-views-block-detalle-contenido-block-4').hide();
      $('a.prices').click(function() {
      	if ($('#block-views-block-detalle-contenido-block-4:visible').length == 1) {
      		$('#block-views-block-detalle-contenido-block-4').hide();
      		$('a.prices').text('Conoce los precios');
      	}else{
      		$('#block-views-block-detalle-contenido-block-4').show();
      		$('a.prices').text('˄');
      	}
      });
    }
  };

})(jQuery, Drupal);
