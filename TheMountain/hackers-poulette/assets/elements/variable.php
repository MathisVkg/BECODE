
<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    require "assets/vendor/autoload.php";

    // if(isset($_POST['killBot']) && isset($_POST['killBot']) != "") {
    //     die();
    // }

    
    function setVaraible() {
        if (isset($_POST['name']) AND isset($_POST['lastname']) AND isset($_POST['gender']) 
        AND isset($_POST['country']) AND isset($_POST['message']) AND isset($_POST['case']) AND isset($_POST['email'])) {
            $variable = array (
                "name" => $_POST['name'],
                "lastname" => $_POST['lastname'],
                "gender" => "",
                "email" => $_POST['email'],
                "country" => $_POST['country'],
                "case" => "",
                "message" => $_POST['message'],
            );
            $case = $_POST['case'];
            switch ($case) {
            case 1:
                $variable['case'] = "Other";
                break;
            case 2:
                $variable['case'] = "Breakage during transport";
                break;
            case 3:
                $variable['case'] = "Defective material";
                break;
            case 4:
                $variable['case'] = "Missing parts";
                break;
            case 5:
                $variable['case'] = "Hardware failure";
                break;
            }
            $gender = $_POST['gender'];
            switch ($gender) {
            case 1:
                $variable['gender'] = "Male";
                break;
            case 2:
                $variable['gender'] = "Female";
                break;
            case 3:
                $variable['gender'] = "Dinosaurs";
                break;
            }
            // displayArray($variable);
            sendMail($variable);
        }
    }
    function displayArray($variable) {
        echo "<pre style='color: white; text-align: center;'>";
        print_r($variable);
        echo "</pre>";
    }
    function sendMail($variable) {
        $mail = new PHPMailer(true);
        $mail->SMTPSecure = 'tls';
        $mail->isSMTP();
        $mail->Host = 'smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Port = 2525;
        $mail->Username = '5209b5de024e6d';
        $mail->Password = '573d7865334218';

        $mail->setFrom('hackeusepoulette-0568cc@inbox.mailtrap.io', 'Mailer');
        $mail->addAddress($variable["email"], $variable["lastname"] . " " . $variable["name"]);
        // $mail->addReplyTo('info@example.com', 'Information');
        $mail->addAttachment("assets\img\hackers-poulette-logo.png");
        $mail->isHTML(true);
        $mail->Subject = $variable["case"];
        $mail->Body = $variable["message"];
        $mail->send();
        echo '<script>alert("Thanks your for your message")</script>';
        // header("Location: assets\elements\message.php");
        exit();
    }
    setVaraible();




    // $arrayError = [];
    // foreach($arrayPost as $key => $value) {
    //     if(empty($value)) {
    //         $arrayError[$key] = "*";
    //     } else {
    //         $arrayError[$key] = "";
    //     }
    // }
    // function displayError($n, $array1, $array2) {
    //     $key_arrayPost = array_keys($array1);
    //     if (!empty($_POST["submit"])){
        //     if (empty($array[$key_arrayPost[$n]])){
        //         echo "<p style='color: red;'>" . $array2[$key_arrayPost[$n]] . "</p>";
        //     }
    //     }
    // }
?>
