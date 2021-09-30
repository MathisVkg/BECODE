<?php
require 'assets/elements/html.php';
require 'assets/elements/form.php';
require 'assets/elements/validator.php';
$form = new Form($_POST);
$html = new Html();
$validator = new Validator();
?>


<!DOCTYPE html>
<html lang="en">
<head>
<?php
echo $html->getMetaBalise();
echo $html->getCss();
echo $html->getGoogleFont();
?>
<title>Database</title>
</head>
<body>
    
    <form action="" method="post">
        <?php   

        echo $form->input('username');
        echo $form->select('country');
        echo $form->textarea('text');
        echo $form->inputRadio('gender');
        echo $form->inputCheckbox('option');
        echo $form->submit();

        ?>
    </form>
    <?php
    echo $html->getImg();
    echo $html->getLinkHref();
    echo $html->scriptLink();
    echo $validator->getDataForm();
    ?>

</body>
</html>