<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>

	<footer id="colophon" class="section site-footer">
        <ul>
            <li><a href="<?php echo home_url('/mentions-legales'); ?>">Mentions Légales</a></li>
            <li><a href="#">STUDIO KOUKAKI</a></li>
            <li><a href="<?php echo home_url('/contact'); ?>">Contact</a></li>
        </ul>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
