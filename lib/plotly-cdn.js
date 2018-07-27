import loadJavaScriptTag from "./javascript-loader"
const plotlyCDN = (cb) => { loadJavaScriptTag("https://cdn.plot.ly/plotly-latest.min.js", cb) }
export default plotlyCDN
