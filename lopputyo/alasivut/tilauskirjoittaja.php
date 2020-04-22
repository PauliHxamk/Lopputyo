<?php

$fh = file_get_contents("tilaus.json");
$array_data = json_decode($fh,true);
file_put_contents($fh, $stringData);


?>