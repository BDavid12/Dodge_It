<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Dodge It | Belépés</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="regist.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <script src="login.js" type="text/javascript"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
        <link rel="icon" href="icon.png">
    </head>
    <body>
        <div class="crt">
            <div class="info">
                <?php
                    $user_input_username = $_REQUEST['name']; 
                    $user_input_password = $_REQUEST['pass']; 
                    
                    // Database connection settings
                    $servername = "localhost";
                    $username = "root";
                    $password = "";
                    $dbname = "weblap";
                    
                    // Create a database connection
                    $conn = new mysqli($servername, $username, $password, $dbname);
                    
                    // Check for database connection errors
                    if ($conn->connect_error) {
                        die("Connection failed: " . $conn->connect_error);
                    }
                    
                    // Prepare a SQL query to retrieve the hashed password based on the username
                    $sql = "SELECT pass FROM login WHERE username = ?";
                    $stmt = mysqli_prepare($conn, $sql);
                    mysqli_stmt_bind_param($stmt, "s", $user_input_username);

                    // Execute the query
                    mysqli_stmt_execute($stmt);

                    // Bind the result
                    mysqli_stmt_bind_result($stmt, $stored_hashed_password);

                    // Fetch the result
                    mysqli_stmt_fetch($stmt);

                    // Close the statement and the database connection
                    mysqli_stmt_close($stmt);
                    mysqli_close($conn);
                    
                    if (password_verify($user_input_password, $stored_hashed_password)) {
                        echo "
                        <script>
                        window.open(\"index2.html\", \"_self\")
                        </script>";
                    } else {
                        echo "Hibás felhasználónév vagy jelszó. <a href=\"login.html\" target=\"_self\">Próbáld újra</a>.";
                    }
                ?>
            </div>
        </div>
    </body>
 
</html>