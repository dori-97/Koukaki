<?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            $characters_query = new WP_Query($args);
            
            if ( $characters_query->have_posts() ) : ?>

            <article id="characters">
            <div class="swiper-container">
            <h3 class="section-title">Les personnages</h3>
                <div class="swiper-wrapper">
                    <?php
                    while ( $characters_query->have_posts() ) : $characters_query->the_post(); ?>
                     <div class="swiper-slide">
                        <figure>
                            <?php 
                            if (has_post_thumbnail()) {
                                echo get_the_post_thumbnail( get_the_ID(), 'full' );
                            } else {
                                echo '';
                            }
                            ?>
                        <figcaption><?php the_title(); ?></figcaption>
                        </figure>
                        </div>
                    <?php endwhile; ?>    
                </div>
                </article>
                </div>
           <?php endif; 
            wp_reset_postdata();
            ?>