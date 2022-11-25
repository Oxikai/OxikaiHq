<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "OxikaiTest";

if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname)) {
    die("failed to connect!";)
}