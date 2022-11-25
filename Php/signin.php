<?php
    /*$username = $_POST['Username'];
    $password = $_POST['Password'];
    $email = $_POST['Email'];

    $conn = new mysqli('localhost', 'root', '', 'OxikaiTest');
    if($conn->connect_error) {
        die('Connection Failed : '.$conn->connect_error);
    } else {
        $query = "select * from Accounts where Username = '$username' limit 1";
        $result = msqli_query($con, $query);
        if($result && msqli_num_rows($result) > 0) {
            $user_data = mysqli_fetch_assoc($result);
            if($user_data['password'] === $pasword) {
                $_SESSION['USER'] = $user_data['username'];
                die;
            }
        }
        $conn->close();
    }*/

		$user_name = $_POST['Username'];
		$password = $_POST['Password'];

		if(!empty($user_name) && !empty($password) && !is_numeric($user_name))
		{

			//read from database
			$query = "select * from accounts where Ssername = '$user_name' limit 1";
			$result = mysqli_query($con, $query);

			if($result)
			{
				if($result && mysqli_num_rows($result) > 0)
				{

					$user_data = mysqli_fetch_assoc($result);
					
					if($user_data['Password'] === $password)
					{

						$_SESSION['USER'] = $user_data['USER'];
						header("Location: index.html");
						die;
					}
				}
			}
			
			echo "wrong username or password!";
		}else
		{
			echo "wrong username or password!";
		}