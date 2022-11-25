<?php
    /*$username = $_POST['Username'];
    $password = $_POST['Password'];
    $email = $_POST['Email'];

    $conn = new mysqli('localhost', 'root', '', 'OxikaiTest');
    if($conn->connect_error) {
        die('Connection Failed : '.$conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into registration(username, passwrod, email)
        values(?, ?, ?");
        $stmt->bind_param("sss", $username, $password, $lastname);
        $stmt->close();
        $conn->close();
    }*/

    //something was posted
		$user_name = $_POST['Username'];
		$password = $_POST['Password'];
        $email = $_POST['Email'];

		if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
		{

			//save to database
			$query = "insert into accounts (Username,Password,Email) values ('$user_name','$password', '$email')";

			mysqli_query($con, $query);

			header("Location: login.html");
			die;
		}else
		{
			echo "Please enter some valid information!";
		}
?>