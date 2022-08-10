
setInterval(Times,1000)
function Times() {
    const dat = document.getElementById('date')
    let date = new Date()
    let time = date.toLocaleTimeString();
    dat.innerHTML = time;
    }



