<?php require "assets/elements/variable.php";?>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="assets/css/index.css"/>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bellota:ital,wght@0,300;0,400;1,700&display=swap" rel="stylesheet">
<title>Hackers Poulette</title>
</head>
<body>
    <img src="assets/img/hackers-poulette-logo.png" alt="hackers" class="hackersImg">
    <div class="container" id="formContainer">
        <form action="" method="post" class="formFlex">
            <div class="infoFlex1">
                <h2 class="sendUs">Send us a message</h2>
                <div class="infoGroup">
                    <input type="text" name="name" placeholder="Name" class="inputName">
                    <input type="text" name="lastname" placeholder="Last Name"  class="inputName">
                    <!-- <input type="text" name="killBot" id="killBot" style="display: none;"> -->
                </div>
                <div class="infoGroup2">
                    <input type="text" name="email" placeholder="justinBourdon@gmail.com" class="inputGroup2">
                    <input type="text" name="country" placeholder="Belgium" class="inputGroup2">
                </div>
                <div class="infoGroup3">
                    <select name="case" class="selectClass">
                        <option value="1">Other</option>
                        <option value="2">Breakage during transport</option>
                        <option value="3">Defective material</option>
                        <option value="4">Missing parts</option>
                        <option value="5">Hardware failure</option>
                    </select>
                    <select name="gender" class="selectClass">
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <option value="3">Dinosaurs</option>
                    </select>
                </div> 
            </div>
            <div class="infoFlex2">
                <div class="infoGroup4">
                    <textarea type="text" name="message" class="inputMessage" placeholder="Your message goes here.."></textarea>
                </div>
                <input type="submit" name="submit" value="Submit" class="submitClass" style="transition: 0.5s ease-in-out;" id="submitButton">
            </div>
        </form>
    </div>

    <!-- <script src="assets/elements/script.js"></script> -->
</body>
</html>