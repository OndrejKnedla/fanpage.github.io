<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    // Připojení k databázi
    $conn = new mysqli('localhost', 'root', '', 'test');
    if ($conn->connect_error) {
        die("Připojení se nezdařilo: " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO registration(email) VALUES (?)");
        $stmt->bind_param("s", $email);
        $execval = $stmt->execute();

        if ($execval) {
            echo "Registrace proběhla úspěšně. Děkujeme za váš e-mail!";
        } else {
            echo "Chyba: " . $stmt->error;
        }

        $stmt->close();
        $conn->close();
    }
}
?>