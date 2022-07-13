function handleLogs(elem){
    console.log(elem)
}

const logsArea = document.getElementById("logsArea")
const observer = new MutationObserver(function(mutations) {
    console.log(logsArea.innerText);   
});

observer.observe(logsArea, {
    subtree: true,
    attributes: true,
    childList: true,
    characterData: true,
    characterDataOldValue: true
});