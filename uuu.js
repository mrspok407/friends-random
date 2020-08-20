
  document.addEventListener('DOMContentLoaded', function(event) {
    const test = document.getElementById("test")
    if (!test) return
      
     var link = document.createElement('a')
     var linkText = document.createTextNode("Pixibo")
     
     link.appendChild(linkText)
     link.title = "Pixibo"
     link.href = "http://cdn.jsdelivr.net/gh/mrspok407/friends-random/qqq.js"
     
     test.appendChild(link)
    
    link.addEventListener("click", function(e){
      e.preventDefault()
    })
})   


