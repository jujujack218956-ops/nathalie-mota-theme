<?php
// Chargement des styles et scripts
function nathalie_mota_enqueue()
{
  wp_enqueue_style(
    'nathalie-mota-style',
    get_stylesheet_uri(),
    [],
    '1.0.0'
  );
}
add_action('wp_enqueue_scripts', 'nathalie_mota_enqueue');
