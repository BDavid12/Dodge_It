<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Dodge It | Regisztráció</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="regist.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
        <link rel="icon" href="icon.png">
    </head>
    <body>
        <div class="crt">
            <div class="info">
            <?php
                $servername = "localhost";
                $username = "root";
                $password = "";
                $dbname = "weblap";

                $conn = new mysqli($servername, $username, $password, $dbname);

                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                } else {
                    $name = mysqli_real_escape_string($conn, $_REQUEST['name']);
                    $pass = $_REQUEST['pass'];
                    $email = $_REQUEST['email'];

                    if (empty($name)) {
                        die("Felhasználónév mező kitöltése kötelező!");
                    }

                    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        die("Érvénytelen email cím!");
                    }

                    if (strlen($pass) < 6) {
                        die("A jelszó legalább 6 karakter hosszú kell legyen!");
                    }

                    $sql = "SELECT * FROM login WHERE username = '$name'";
                    $result = $conn->query($sql);

                    if ($result->num_rows > 0) {
                        echo "Ilyen felhasználónév már létezik." . "&nbsp" . "<a href=\"regist.html\" target=\"_self\"> Próbálja újra!</a>";
                    } else {
                        $hashed_password = password_hash($pass, PASSWORD_DEFAULT);

                        $sql = "INSERT INTO login (username, pass, email, points) VALUES ('$name', '$hashed_password', '$email', 0)";

                        if (mysqli_query($conn, $sql)) {
                            echo "<h1>Sikeres regisztráció!" . "<br>" . "<a href=\"login.html\" target=\"_self\">Itt</a> tud bejelentkezni.</h1>";
                        } else {
                            echo "HIBA! $sql. " . mysqli_error($conn);
                        }
                    }
                }
                mysqli_close($conn);
            ?>

            </div>
        </div>
        
    </body>
 
</html>

