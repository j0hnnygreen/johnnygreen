function change() {
    // Get the value entered in the input
    let ip = document.getElementsByName('ip')[0].value;
    let port = document.getElementsByName('port')[0].value;

    // Iterate over each class with same name
    for (let i = 0; i < 7; i++){
        if (ip.length !== 0) {
            document.getElementsByClassName('lhost')[i].innerText = ip;
        }

        if (port.length !== 0) {
            document.getElementsByClassName('lport')[i].innerText = port;
        }
    }

    // Clear the input fields
    document.getElementsByName('ip')[0].value = null;
    document.getElementsByName('port')[0].value = null;
}