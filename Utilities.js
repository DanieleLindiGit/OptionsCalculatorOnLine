function saveFile(filename, Content) {
    var link = document.createElement('a');
    link.download = filename;
    link.href = "data:text/json;charset=utf-8," + encodeURIComponent(Content)
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function openFilePicker() { 
    document.getElementById('filePicker').click();
}