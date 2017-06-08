fetch("http://tristanwiley.com/joey5802/tenessee/get.php").then(data => data.text()).then(data => {
    document.getElementById("howdoing").innerHTML = data.toLowerCase();
});