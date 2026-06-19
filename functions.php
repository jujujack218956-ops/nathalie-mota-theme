<?php
// Chargement du thème
function nathalie_mota_setup()
{
  add_theme_support('title-tag');
  register_nav_menu('main-menu', 'Menu principal');
}
add_action('after_setup_theme', 'nathalie_mota_setup');
// Chargement des styles et scripts
function nathalie_mota_enqueue()
{
  wp_enqueue_style(
    'nathalie-mota-style',
    get_stylesheet_uri(),
    [],
    '1.0.0'
  );

  wp_enqueue_script(
    'nathalie-mota-scripts',
    get_stylesheet_directory_uri() . '/js/scripts.js',
    [],
    '1.0.0',
    true
  );
}
add_action('wp_enqueue_scripts', 'nathalie_mota_enqueue');
