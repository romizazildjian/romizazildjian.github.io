<?php 
if(empty($_SESSION["email"])){

    if(!empty($_POST['email']) && !empty($_POST['password'])){
        session_start();
        $data['email'] = $_POST['email'];
        $data['password'] = $_POST['password'];

        $myfile = fopen("user.json", "r") or die("Unable to open file!");
        $dataJson = json_decode(fread($myfile,filesize("user.json")));
        if($data["email"] == $dataJson -> email && md5($data['password'] == $dataJson -> password)){
            $_SESSION['email'] = $data['email'];
            header("Location: act_login.php");
        }else{
            echo "Login Failed";
        }
        fclose($myfile);
    }else{
        echo "Your field is empty!";
    }
}else{
    echo "Selamat Datang di Dashboard ".$_SESSION["email"]."<br> <a href = 'login.php'>Logout</a>";
}
?>