// Twetch blocker
setInterval(() => {
  var blockList = (localStorage.blockList || [])
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

var blockList = JSON.parse(localStorage.blockList || '[]')
try {
  blockList.push(document.querySelector('.MuiGrid-item').children[0].children[2].children[0].innerText)
  localStorage.setItem('blockList', JSON.stringify(blockList))
} catch (er) {
  console.log(er)
}
