    document.addEventListener("DOMContentLoaded", function(event) {
        console.log("test")
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

    .modal {
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
      let body, modal

      document.head.appendChild(style)

      var link = document.createElement("a")
      var linkText = document.createTextNode("Pixibo")

      link.appendChild(linkText)
      link.title = "Pixibo"
      link.href = "http://cdn.jsdelivr.net/gh/mrspok407/friends-random/qqq.js"
      test.appendChild(link)

      link.addEventListener("click", function(e) {
        e.preventDefault()

        body = document.getElementsByTagName("body")[0]
        modal = document.createElement("div")

        body.style.overflow = "hidden"
        modal.className = "modal"
        modal.innerHTML = "Hello World"

        body.appendChild(modal)
      })

      window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = "none"
          body.style.overflow = "visible"
        }
      }
    })
