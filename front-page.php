<?php
get_header();
?>

<main class="home-main">
  <div class="home-hero">
    <?php $image_hero = get_field('image_hero', 'option'); ?>
    <?php if ($image_hero) : ?>
      <?php echo wp_get_attachment_image($image_hero['ID'], 'large'); ?>
    <?php endif; ?>
  </div>
</main>

<?php
get_footer();
?>