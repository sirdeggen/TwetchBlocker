# TwetchBlocker
save as bookmark to block list of twetch users by name

Copy and paste this into a bookmark in chrome browser:

javascript:var blockList=['Someone','Someone Else']; setInterval(()=>{var allTwetches=document.querySelectorAll('.MuiGrid-item'); allTwetches.forEach((twetch)=>{try{if(blockList.includes(twetch.children[0].children[0].children[1].children[0].innerText)){twetch.style.display='none'}}catch(er){} try{if(blockList.includes(twetch.children[0].children[1].children[0].children[0].innerText)){twetch.style.display='none'}}catch(er){}})},1000)

Change the blocklist to suit, or use the bookmark below whilst on the user page for the person you want to block:
