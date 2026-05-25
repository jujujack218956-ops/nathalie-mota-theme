<?php
// Fichier de debug pour vérifier les chemins des images
require_once( dirname( __FILE__ ) . '/../../wp-load.php' );

echo "Template Directory URI: " . get_template_directory_uri() . "<br>";
echo "Template Directory: " . get_template_directory() . "<br>";
echo "Theme URL: " . get_theme_file_uri( '/assets/images/logo.png' ) . "<br>";
echo "Site URL: " . site_url() . "<br>";
echo "Home URL: " . home_url() . "<br>";

// Vérifier si le fichier existe
$logo_path = get_template_directory() . '/assets/images/logo.png';
echo "Logo path exists: " . ( file_exists( $logo_path ) ? 'YES' : 'NO' ) . "<br>";
echo "Logo path: " . $logo_path . "<br>";
?>
