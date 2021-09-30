
<?php 
    // require 'form.php';
    class Validator{

        public function getDataForm(){
            if (isset($_POST['username']) AND isset($_POST['gender']) AND isset($_POST['country']) 
            AND isset($_POST['text']) AND isset($_POST['option'])) {
                $variable = array (
                    "name" => $_POST['username'],
                    "country" => $_POST['country'],
                    "textarea" => $_POST['text'],
                    "gender" => "",
                    "checkbox" => $_POST['option'],
                );
                $gender = $_POST['gender'];
                switch ($gender) {
                case 1:
                    $variable['gender'] = "Male";
                    break;
                case 2:
                    $variable['gender'] = "Female";
                    break;
                }
                echo "<pre style='color: white; text-align: center;'>";
                print_r($variable);
                echo "</pre>";
            }
        }
    }

?>