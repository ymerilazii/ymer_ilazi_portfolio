// global vars
let terminal, keyPressAudio, writeSpeed, tcode, code;
tcode = document.getElementById('tcode');
window.addEventListener('load', init);

function init() {
    // default settings
    terminal = document.getElementById("terminal");
    writeSpeed = 60;
    terminal.innerText = "[ymer_ilazi]$ ";
    terminalStart();

    // input listener
    terminal.addEventListener("keydown", terminalInputHandler);
}

function terminalStart() {
    terminalWrite('python load.py pages \n\n--Ymer Ilazi\'s Portfolio!--\n----------------------------------\nPages:\n-(1) Home\n-(2) Projects\n-(3) Contact\n\nInput Page Number>');
}


function terminalWrite(text) {
    let counter = 0;

    (function writer() {
        terminal.disabled = true;
        if (counter < text.length) {
            let terminalText = (`${(terminal.value).replace("|", "")}${text.charAt(counter)}`);
            if (counter !== text.length - 1) {
                terminalText = `${terminalText}|`
            }
            terminal.value = terminalText;
            counter++;
            setTimeout(writer, writeSpeed);
        } else {
            clearTimeout(writer);
            terminal.disabled = false;
            terminal.blur();
            terminal.focus();
        }
    })();
}
function terminalInputHandler(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 49:
            code = 1;
            tcode.value = code;
            terminalWrite('1 -- Home\nLoading page.....');
            setTimeout(() => { document.getElementById('TConsole').submit(); }, 2500);
            break;
        case 50:
            code = 2;
            tcode.value = code;
            terminalWrite('2 -- Projects\nLoading page.....');
            setTimeout(() => { document.getElementById('TConsole').submit(); }, 2500);
            break;
        case 51:
            code = 3;
            tcode.value = code;
            terminalWrite('3 -- Contact\nLoading page.....');
            setTimeout(() => { document.getElementById('TConsole').submit(); }, 2500);
            break;
        default:
            e.preventDefault();
            terminalWrite("\nInvalid input!\nInput Again:");
    }
}