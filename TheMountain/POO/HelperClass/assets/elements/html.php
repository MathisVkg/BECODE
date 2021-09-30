
<?php 

class Html{

    public function getCss(){
        return '<link rel="stylesheet" href="assets/helperClass.css" />';
    }

    public function getMetaBalise(){
        echo '<meta charset="UTF-8">';
        echo '<meta http-equiv="X-UA-Compatible" content="IE=edge">';
        echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    }

    public function getImg(){
        return '<img src="assets/chun-lo-demon-samurai-drawing-illustration-hd-wallpaper-preview.jpg" alt="cat" class="catImg">';
    }

    public function getLinkHref(){
        return '<a href="https://github.com/MathisVkg" class="githubLink">Link</a>';
    }

    public function scriptLink(){
        return '<script src="assets/elements/script.js"></script>';
    }

    public function getGoogleFont(){
        echo '<link rel="preconnect" href="https://fonts.googleapis.com">';
        echo '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>';
        echo '<link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet">';
    }
}

?>