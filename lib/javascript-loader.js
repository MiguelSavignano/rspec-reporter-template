const loadJavaScriptTag = (src, callback) => {
  let script = document.createElement("script"),
    loaded
  script.setAttribute("src", src)
  if (callback) {
    script.onreadystatechange = script.onload = function() {
      if (!loaded) {
        callback()
      }
      loaded = true
    }
  }
  document.getElementsByTagName("head")[0].appendChild(script)
}
export default loadJavaScriptTag
