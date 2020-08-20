    document.addEventListener("DOMContentLoaded", function(event) {
      const test = document.getElementById("test")
      if (!test) return

      var style = document.createElement("style")
      style.innerHTML = `
        #test {
        width: 200px;
        height: 50px;
        border-radius: 5px;
        background-color: peru;
    }

    .model {

      position: fixed;
      z-index: 9999;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgb(0,0,0);
      background-color: rgba(0,0,0,0.4);
    }

    `
      document.head.appendChild(style)

      var link = document.createElement("a")
      var linkText = document.createTextNode("Pixibo")

      link.appendChild(linkText)
      link.title = "Pixibo"
      link.href = "http://cdn.jsdelivr.net/gh/mrspok407/friends-random/qqq.js"

      test.appendChild(link)

      link.addEventListener("click", function(e) {
        e.preventDefault()

        const modal = document.createElement("div")
        modal.className = "modal"
        modal.innerHTML = "Hello World"

        document.body.appendChild(modal)
      })
    })

