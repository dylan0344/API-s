<?php
$luxewagen = (object)[
    'volvo' => ['s60', '2,5T', 'sedan'],
    'bmw' => ['318', '2.0', 'estate'],
    'mercedes' => ['C180', '1.8', 'sedan'],
    'audi' => ['A3', '2.0T', 'hatchback'],
    'VW' => ['GOLF', '1.8T', 'hatchback'],
    'Seat' => ['Ibiza', '1.2TDI', 'hatchback'],
];


if (isset($_POST['value'])) {
    if ($luxewagen->{$_POST['value']} != null) {
        echo json_encode($luxewagen->{$_POST['value']});
    }
} else {
    echo json_encode($luxewagen);
}

?>