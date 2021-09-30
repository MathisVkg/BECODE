<?php 



// SESSION START
session_start();

// THE_ROOT
define('THE_ROOT', dirname(__DIR__));

// dependencies
require_once THE_ROOT . DIRECTORY_SEPARATOR . 'bin' . DIRECTORY_SEPARATOR . 'config.php';
require_once THE_ROOT . DIRECTORY_SEPARATOR . 'model' . DIRECTORY_SEPARATOR . 'connectToDb.model.php';

// DB Connection
$db = connectToDB();

//IF CONNECTION FAILED
if(!$db){
    include THE_ROOT . DIRECTORY_SEPARATOR . 'view' . DIRECTORY_SEPARATOR . 'errorConnect.view.php';
}

// IF ADMIN
if(isset($_SESSION['mysession'])&&$_SESSION['mysession'] === session_id()){
    
require_once THE_ROOT . DIRECTORY_SEPARATOR . 'controller' . DIRECTORY_SEPARATOR . 'admin.controller.php';


// IF NOT ADMIN
}else{

    require_once THE_ROOT . DIRECTORY_SEPARATOR . 'controller' . DIRECTORY_SEPARATOR . 'public.controller.php';
}
