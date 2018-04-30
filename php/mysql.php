<?php
// Create the socket and connect
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
$connection = socket_connect($socket,'123.57.138.127', 1337);
while($buffer = socket_read($socket, 1024, PHP_NORMAL_READ)) {
 if($buffer == "NO DATA") {
 echo("<p>NO DATA</p>");
 break;
 }else{
 // Do something with the data in the buffer
 echo("<p>Buffer Data: " . $buffer . "</p>");
 }
}
echo("<p>Writing to Socket</p>");
// Write some test data to our socket
if(!socket_write($socket, "SOME DATA\r\n")){
 echo("<p>Write failed</p>");
}
// Read any response from the socket phpernote.com
while($buffer = socket_read($socket, 1024, PHP_NORMAL_READ)){
 echo("<p>Data sent was: SOME DATA<br> Response was:" . $buffer . "</p>");
}
echo("<p>Done Reading from Socket</p>");