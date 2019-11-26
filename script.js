let checkCompatibility = () => {
    // check if execCommand/contentEditable are compatible
    if (document.contentEditable != undefined && document.execCommand != undefined) {
        alert("HTLM5 Document editing API is not supported on this browser.")
    } else {
        document.execCommand('styleWithCSS', false, true);
    }
};

window.addEventListener('load', checkCompatibility);

function bold() {
    document.execCommand('bold');
}

function underline() {
    document.execCommand('underline');
}

function link() {
    let url = prompt('Enter URL: ');
    document.execCommand('createLink', false, url);
}

function copy() {
    document.execCommand('copy');
}

function cut() {
    document.execCommand('cut');
}

function insertHorizontalLine() {
    document.execCommand('insertHorizontalRule');
}