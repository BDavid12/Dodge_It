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
        <script src="regist.js" type="text/javascript"></script>
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
                    
                    // Create a database connection
                    $conn = new mysqli($servername, $username, $password, $dbname);
                    
                    // Check connection
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }
                    else{
                        $name = mysqli_real_escape_string($conn, $_REQUEST['name']);
                        $pass = password_hash($_REQUEST['pass'], PASSWORD_BCRYPT);
                        $email = $_REQUEST['email'];
                        $sql = "SELECT * FROM login WHERE username = '$name'";
                        $result = $conn->query($sql);

                        if ($result->num_rows > 0) {
                            echo "Ilyen felhasználónév már létezik." . "&nbsp" . "<a href=\"regist.html\" target=\"_self\"> Próbálja újra!</a>";
                        } 
                        else {
                            $sql = "INSERT INTO login VALUES ('$name','$pass','$email', 0)";
                        
                            if(mysqli_query($conn, $sql)){
                                echo "<h1>Sikeres regisztráció!" . "<br>" . "<a href=\"login.html\" target=\"_self\">Itt</a> tud bejelentkezni.</h1>";
                    
                            } 
                            else{
                                echo "HIBA! $sql. "
                                    . mysqli_error($conn);
                            }
                        }

                        
                    }
                    mysqli_close($conn);
                ?>
            </div>
        </div>
        
    </body>
 
</html>

