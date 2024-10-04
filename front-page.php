<?php

get_header();
?>

    <main id="primary" class="site-main">
        <section class="section banner">
            <img class="logo-image floating-title parallax" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
            <img class="banner-fallback" src="<?php echo get_template_directory_uri() . '/assets/images/banner.png'; ?> " alt="Image de fallback">
            <video class="hero-video" autoplay loop muted poster="/wp-content/themes/foce/assets/images/banner.png">
            <source src="<?php echo get_stylesheet_directory_uri() . '/assets/video/video.mp4'; ?>" type="video/mp4">
            Votre navigateur ne supporte pas la vidéo HTML5.
            </video>
        </section>

        <section id="#story" class="section story">
            <h2 class="section-title">L'histoire</h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            
            <?php 
            $template_part = './templates-part/characters-slider';
            if (locate_template($template_part.'.php')){
                get_template_part($template_part);
            } else {
                echo '<p>Le fichier characters-slider est introuvable</p>';
            }
            ?>

            <article id="place">
                <div>
                    <h3 class="section-title">Le Lieu</h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>

            </article>
        </section>


        <section id="studio" class="section">
            <h2 class="section-title">Studio Koukaki</h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>

        <?php include 'nominations.php'; ?>

    </main><!-- #main -->

  

<?php
get_footer();
