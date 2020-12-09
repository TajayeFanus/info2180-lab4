function getName() {
    let phpdata = new XMLHttpRequest();
    let h = document.getElementById("Hero").value;
    phpdata.open("GET", "superheroes.php?query=" + h, true);
    phpdata.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("results").innerHTML = this.responseText;
        }
    }
    phpdata.send();
}