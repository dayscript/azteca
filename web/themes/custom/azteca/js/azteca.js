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
      $('#block-secondarymenuhome .card-item > a').attr('target','_blank');
    }
  };

})(jQuery, Drupal);
