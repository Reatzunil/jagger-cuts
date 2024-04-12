<?php

$dsn = "mysql:host=localhost;dbname=dblng";//name of the db
$dbusername = "root"; //db username
$dbpassword = "";//db password

try {
    
    $pdo = new PDO($dsn, $dbusername, $dbpassword); 
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) { 
    echo "Connection failed: " . $e->getMessage();
}