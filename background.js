
var clickHandler = function(e) {
  alert('fala joel');
}


chrome.contextMenus.create({
    "title": "Fala Joel",
    "contexts": ["page", "selection", "image", "link"],
    "onclick" : clickHandler
  });