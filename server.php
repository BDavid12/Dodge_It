<?php
$conn = mysqli_connect('localhost', 'root', '', 'sobsuza');

$sql = mysqli_query($conn, "SELECT * FROM medicines");

$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));
