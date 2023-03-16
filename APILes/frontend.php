<html>
<?php
include_once ('/backend.php');
function loadDoc($volvo) {
var http = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
document.getElementById("demo").innerHTML = this.responseText;
}
};
xhttp.open("GET", "table.html", true);
xhttp.send();
}
?>
</html>