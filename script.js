var txtFile = new XMLHttpRequest();
var allText = "file not found";
txtFile.onreadystatechange = function () {
    if (txtFile.readyState === XMLHttpRequest.DONE && txtFile.status == 200) {
        allText = txtFile.responseText;
        allText = allText.split("\n").join("<br>");
    }

    document.getElementById('./files/intro_text').innerHTML = allText;
}
txtFile.open("GET", '/Website/files/intro.txt', true);
txtFile.send(null);