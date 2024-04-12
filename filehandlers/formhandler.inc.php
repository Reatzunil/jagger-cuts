<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["user"];
    $password = $_POST["pass"];
    
    try {
        require_once "dbh.inc.php";

        $query = "INSERT INTO users (user, pass) VALUES (?, ?);";

        $stmt = $pdo->prepare($query);

        $stmt->bindParam(":user", $username);
        $stmt->bindParam(":pass", $password);
        
        $stmt->execute();

        $pdo = null;
        $stmt = null;

        header("Location: ../login.php");

        die();
    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
} else {
    header("Location: ../login.php");
}