<?php
get_header();
?>

<div class="single-photo">

  <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
      <div class="single-photo__container">

        <div class="single-photo__description">
          <h2 class="single-photo__title"><?php the_title(); ?></h2>
          <div class="single-photo__meta">
            <?php
            $reference = get_post_meta(get_the_ID(), 'reference', true);
            $categories = get_the_terms(get_the_ID(), 'categorie');
            $formats = get_the_terms(get_the_ID(), 'format');
            $type = get_post_meta(get_the_ID(), 'type', true);
            $date = get_the_date('Y');
            ?>
            <p class="single-photo__reference"><span>Référence :</span> <?php echo $reference; ?></p>
            <p class="single-photo__category"><span>Catégorie :</span> <?php echo $categories[0]->name; ?></p>
            <p class="single-photo__format"><span>Format :</span> <?php echo $formats[0]->name; ?></p>
            <p class="single-photo__type"><span>Type :</span> <?php echo $type; ?></p>
            <p class="single-photo__date"><span>Année :</span> <?php echo $date; ?></p>
          </div>
        </div>
        <div class="single-photo__image">
          <?php the_post_thumbnail('full'); ?> </div>
      </div>
      <div class="single-bottom ">
        <p class="interet">Cette photo vous intéresse? <button class="contact-photo" type="button" data-ref="<?php echo $reference; ?>">Contact</button></p>
        <div class="card-photo">
          <?php $previous_post = get_previous_post(); ?>
          <?php $next_post = get_next_post(); ?>
          <?php if ($previous_post) : ?>
            <a href="<?php echo get_permalink($previous_post->ID); ?>" class="card-photo__previous">Photo précédente
              <div>
                <?php echo get_the_post_thumbnail($previous_post->ID, 'thumbnail', ['class' => 'card-photo__thumbnail']); ?>
              </div>
            </a>

          <?php endif; ?>
          <?php if ($next_post) : ?>
            <a href="<?php echo get_permalink($next_post->ID); ?>" class="card-photo__next">Photo suivante
              <div>
                <?php echo get_the_post_thumbnail($next_post->ID, 'thumbnail', ['class' => 'card-photo__thumbnail']); ?>
              </div>
            </a>
          <?php endif; ?>
        </div>
      </div>
  <?php endwhile;
  endif; ?>
  <div class="single-photo__suggestion">
    <!-- Suggestions d'autres photos apparentées-->
  </div>
</div>
<?php
get_footer();
?>