# TwetchBlocker
save as bookmark to block list of twetch users by name


# Block User
Create a bookmark in chrome browser, and edit the details as follows:
Name: 'Block User'
URL: `javascript:var blockList=JSON.parse(localStorage.blockList||'[]');try{blockList.push(document.querySelector('.MuiGrid-item').children[0].children[2].children[0].innerText);localStorage.setItem('blockList',JSON.stringify(blockList))}catch(er){console.log(er)}`

Only works on the user's profile page.

# Start Blocking
Create a bookmark in chrome browser, and edit the details as follows:
Name: 'Start Blocking'
URL: `javascript:setInterval(()=>{var blockList=(localStorage.blockList||[]);var allTwetches=document.querySelectorAll('.MuiGrid-item');allTwetches.forEach((twetch)=>{try{if(blockList.includes(twetch.children[0].children[0].children[1].children[0].innerText)){twetch.style.display='none'}}catch(er){}
try{if(blockList.includes(twetch.children[0].children[1].children[0].children[0].innerText)){twetch.style.display='none'}}catch(er){}})},1000)`

Works Everywhere on Twetch once pressed - simply refresh to deactivate.

If you mess something up - simply localStorage.removeItem('blockList') in the console to start over.
