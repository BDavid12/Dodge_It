<?php
$conn = mysqli_connect('localhost', 'root', '', 'weblap');

$sql = mysqli_query($conn, "SELECT username, points FROM login ORDER BY points DESC");

$result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

exit(json_encode($result));

?>

