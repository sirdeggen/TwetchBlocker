// Twetch blocker
var blockList = ['Philonous', 'The Inescapable']
setInterval(() => {
  var allTwetches = document.querySelectorAll('.MuiGrid-item')
  allTwetches.forEach((twetch) => {
    try {
      if (blockList.includes(twetch.children[0].children[0].children[1].children[0].innerText)) {
        twetch.style.display = 'none'
      }
    } catch (er) {
    // ignore
    }
    try {
      if (blockList.includes(twetch.children[0].children[1].children[0].children[0].innerText)) {
        twetch.style.display = 'none'
      }
    } catch (er) {
      // ignore
    }
  })
}, 1000)
