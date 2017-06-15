fetch("http://tristanwiley.com/joey5802/tenessee/get.php").then(data => data.text()).then(data => {
    var text = data.replace(/&/g, '&amp;').replace(/</g, '&lt;');
    document.getElementById("howdoing").innerHTML = text;
});
