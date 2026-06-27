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

  <?php
  $args = array(
    'post_type'      => 'photo',
    'posts_per_page' => 8,
    'orderby'        => 'date',
    'order'          => 'DESC',
  );

  $query = new WP_Query($args);
  ?>

  <!-- Boucle : pour chaque photo, on appelle le bloc réutilisable -->
  <div class="home-photos">
    <?php
    if ($query->have_posts()) :
      while ($query->have_posts()) : $query->the_post();
        get_template_part('template-parts/photo-block', null, ['show_meta' => true]);
      endwhile;
      wp_reset_postdata();
    endif;
    ?>
  </div>
  <button class="load-more" id="load-more" data-offset="8" aria-label="Charger plus de photos">Charger plus</button>
</main>

<?php
get_footer();
?>