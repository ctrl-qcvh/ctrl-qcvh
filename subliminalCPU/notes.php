<?php

$host = 'sienna-vulture-237544.hostingersite.com';
$user = 'u384165119_';
$pass = 'Ptyxjkwt2181g';
$db = 'u384165119_'; // Update with your database name

$id = $_GET['id'] ?? 0;

if ($id < 1) {
    die(json_encode(['error' => 'Invalid ID']));
}

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

$stmt = $conn->prepare("SELECT data FROM binary_data WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    echo json_encode(['success' => true, 'data' => $row['data']]);
} else {
    echo json_encode(['error' => 'Not found']);
}

$stmt->close();
$conn->close();










<?php

$host = 'sienna-vulture-237544.hostingersite.com';
$user = 'u384165119_';
$pass = 'Ptyxjkwt2181g';
$db = 'u384165119_'; // Update with your database name

$binaryString = $_POST['data'] ?? '';

if (empty($binaryString)) {
    die(json_encode(['error' => 'No data provided']));
}

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

$stmt = $conn->prepare("INSERT INTO binary_data (data) VALUES (?)");
$stmt->bind_param("s", $binaryString);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'id' => $stmt->insert_id]);
} else {
    echo json_encode(['error' => $stmt->error]);
}

$stmt->close();
$conn->close();
