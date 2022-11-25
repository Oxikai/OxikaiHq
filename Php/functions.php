<?php
function check_login($con) {
    if (isset($_SESSION['USER'])) {
        $id = $_SESSION['USER'];
        $query = "select * from users where USER = '$id limit 1'";
        $result = mysqli_query($con,$query);
        if$reslut && mysqli_num_rows($result) > 0) {
            $user_data = msqli_fetch_assoc($result);
            return $user_data;
        }
    }

    header("Location: index.html");
    die;
}
?>