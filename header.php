<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <header class="site-header">
    <a href="<?php echo esc_url(home_url()); ?>">
      <img src="<?php echo esc_attr(get_theme_file_uri('assets/images/logo.svg')); ?>" alt="Nathalie Mota">
    </a>
    <nav>
      <?php
      wp_nav_menu([
        'theme_location' => 'main-menu',
        'container' => false,
        'menu_class' => 'main-menu',
      ]);
      ?>
    </nav>
  </header>
  <main class="site-main">