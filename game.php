<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Dodge It</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="game.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link rel="icon" href="icon.png">
</head>
<body>
    <div class="crt" id="border">
        <div id="topPlatform"></div>
        <div id="botPlatform"></div>
        <div class="character"></div>
        <div id="score"></div>
        <div id="spike1" class="top"></div>
        <div id="spike2" class="bot"></div>
        <div id="spike3" class="top"></div>
        <div id="spike4" class="bot"></div>
        <div id="countdown"></div>
        <div id="obsticle1" class="ob"></div>
        <div id="obsticle2" class="ob"></div>
        <div id="obsticle3" class="ob"></div>
        <div class="gameover" style="visibility: hidden;">
            <div class="container d-flex">
                <div class="urlap">
                    <div class="container-fluid">
                        <div class="row text-center">GAME OVER</div>
                        <div class="row text-center"><span id="points"></span></div>
                        <div class="row" onclick="window.open('game.php', '_self')"><button>Újra</button></div>
                        
                        <div class="row" onclick="window.open('index2.html', '_self')"><button>Menü</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="game.js"></script>
    <?php
                $servername = "localhost";
                $username = "root";
                $password = "";
                $dbname = "weblap";

                $conn = new mysqli($servername, $username, $password, $dbname);

                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                } else {
                    $points = $_COOKIE['points'];
                    $originalPoints = 0;
                    $username = $_COOKIE['username'];
                    $sql = "SELECT points FROM login WHERE username = '$username'";
                    $result = $conn->query($sql);
                    
                    if ($result->num_rows > 0) {
                        while($row = $result->fetch_assoc()) {
                          $originalPoints = $row["points"];
                        }
                    }

                    if($originalPoints > $points){

                    } else {
                        $sql = "UPDATE login SET points=$points WHERE username = '$username'";

                        if ($conn->query($sql) === TRUE) {
                        }
                    }
                }
                $conn->close();
            ?>
</body>
</html>


