async function clipboardCopy(p, btnId) {
    let text = document.querySelector(p).innerText;
    navigator.clipboard.writeText(text);
    const cpSvg = document.getElementById(btnId).innerHTML;
    document.getElementById(btnId).innerHTML = "<b>Copied!</b>";
    await new Promise(r => setTimeout(r, 2000));
    document.getElementById(btnId).innerHTML = cpSvg;
}