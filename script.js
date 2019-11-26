let checkCompatibility = () => {
    // check if execCommand/contentEditable are compatible
    if (document.contentEditable != undefined && document.execCommand != undefined) {
        alert("HTLM5 Document editing API is not supported on this browser.")
    } else {
        document.execCommand('styleWithCSS', false, true);
    }
};

window.addEventListener('load', checkCompatibility);

let editor = document.getElementById('editor');
editor.focus();

function bold() {
    document.execCommand('bold');
    editor.focus();
}

function underline() {
    document.execCommand('underline');
    editor.focus();
}

function link() {
    let url = prompt('Enter URL: ');
    document.execCommand('createLink', false, url);
    editor.focus();
}

function copy() {
    document.execCommand('copy');
    editor.focus();
}

function cut() {
    document.execCommand('cut');
    editor.focus();
}

function insertHorizontalLine() {
    document.execCommand('insertHorizontalRule');
    editor.focus();
}

function insertOrderedList() {
    document.execCommand('insertOrderedList');
    editor.focus();
}

function insertUnorderedList() {
    document.execCommand('insertUnorderedList');
    editor.focus();
}

function justifyLeft() {
    document.execCommand('justifyLeft');
    editor.focus();
}

function justifyCenter() {
    document.execCommand('justifyCenter');
    editor.focus();
}

function justifyRight() {
    document.execCommand('justifyRight');
    editor.focus();
}

function undo() {
    document.execCommand('undo');
    editor.focus();
}

function redo() {
    document.execCommand('redo');
    editor.focus();
}

// add active class
function active() {
    let menu = document.getElementById('menu');
    let buttons = menu.getElementsByClassName('btn');

    for (let i=0; i<buttons.length; i++) {
        buttons[i].addEventListener('click', function() {
            this.classList.contains('active') ? this.className -= ' active' : this.className += ' active';
        });
    }
}

// call active function
active();
