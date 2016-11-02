;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-xian" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M61.236836 99.750628l912.907719 0 0 187.929128-912.907719 0 0-187.929128Z"  ></path>'+
      ''+
      '<path d="M61.236836 402.139565l912.907719 0 0 187.929128-912.907719 0 0-187.929128Z"  ></path>'+
      ''+
      '<path d="M61.236836 704.529224l912.907719 0 0 187.928406-912.907719 0 0-187.928406Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-iconfontwancheng" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M512 0C229.2 0 0 229.2 0 512c0 282.8 229.2 512 512 512s512-229.2 512-512C1024 229.2 794.7 0 512 0zM492.2 768 256 514.6l60.5-51.2 136.6 113c56-70.2 180.2-209.6 351.6-320.4l14.4 35.1C661.8 443.6 533 658.3 492.2 768z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiantou" viewBox="0 0 1186 1024">'+
      ''+
      '<path d="M398.046808 512.000686 878.490464 73.122932c16.80827-16.692817 16.80827-43.8285 0-60.5537-16.756175-16.758991-43.965073-16.758991-60.733919 0L306.462997 479.593587c-8.932121 8.909594-12.758966 20.739304-12.132423 32.407099-0.626544 11.674834 3.200301 23.517217 12.132423 32.481721l511.303403 466.952548c16.770255 16.753359 43.967888 16.753359 60.735327 0 16.80827-16.695633 16.80827-43.834132 0-60.559332L398.046808 512.000686 398.046808 512.000686zM398.046808 512.000686"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-wancheng" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 0C229.230514 0 0 229.230514 0 512S229.230514 1024 512 1024 1024 794.769486 1024 512 794.769486 0 512 0zM818.416612 390.367825 485.174557 718.187716 485.168962 718.187716c-23.719869 23.233049-62.256962 23.233049-85.982426 0L205.583388 527.930754c-23.725464-23.216262-23.725464-61.333683 0-84.561137 23.719869-23.216262 62.262557-23.227454 85.982426 0l150.61753 147.987585 290.256437-285.544918c23.719869-23.233049 62.262557-23.233049 85.976831 0C842.142077 329.034142 842.142077 367.151563 818.416612 390.367825z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-wancheng1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 0C229.229714 0 0 229.229714 0 512s229.229714 512 512 512 512-229.229714 512-512S794.770286 0 512 0zM763.326984 375.239111l-308.256508 308.614095c-9.882413 9.524825-25.624381 9.524825-35.076063 0L419.75873 683.853206 260.380444 524.629333c-9.508571-9.825524-9.508571-25.640635-0.056889-35.092317 9.833651-9.654857 25.469968-9.654857 35.116698 0l141.889016 141.897143 74.556952-74.58946 0.365714-0.390095L728.502857 340.203683c9.662984-9.532952 25.339937-9.532952 34.824127 0.308825C773.046857 349.96419 773.046857 365.828063 763.326984 375.239111z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-yuanjiaojuxing11" viewBox="0 0 1025 1024">'+
      ''+
      '<path d="M979.033732 827.303504 813.373688 827.303504 813.373688 1004.26563C813.373688 1004.26563 803.339753 1025.334669 773.237948 1023.933033 743.113894 1022.531397 743.113894 1004.26563 743.113894 1004.26563L741.111557 827.303504 587.510033 827.303504C562.569809 827.303504 542.323953 809.682935 542.323953 787.968699 542.323953 766.254462 562.569809 748.656142 587.510033 748.656142L743.113894 748.656142 743.113894 591.33917C743.113894 591.33917 744.89375 566.576931 773.237948 561.838066 814.107878 565.709251 813.373688 591.33917 813.373688 591.33917L815.398273 748.656142 979.033732 748.656142C1003.973957 748.656142 1024.197564 766.254462 1024.197564 787.968699 1024.197564 809.682935 1003.973957 827.303504 979.033732 827.303504ZM652.763983 453.6896C652.763983 453.6896 636.700788 463.523301 652.763983 483.190704 652.763983 483.190704 682.888036 499.60987 682.888036 528.42128 682.888036 554.562907 682.888036 591.33917 682.888036 591.33917 682.888036 591.33917 664.800255 620.840273 642.730048 591.33917 642.730048 591.33917 584.506527 528.42128 532.290018 502.858106 532.290018 502.858106 504.190551 479.252774 532.290018 453.6896 532.290018 453.6896 680.863451 339.645363 582.481941 178.412709 582.481941 178.412709 462.030225 30.929438 301.398272 109.5768 301.398272 109.5768 200.035505 164.885807 190.98049 276.727473 189.868081 353.150016 218.390264 413.598356 251.206349 443.855899 251.206349 443.855899 301.620754 488.552518 241.172414 512.691808 241.172414 512.691808 156.13982 576.054661 120.698449 650.319129 98.89522 701.623462 92.042776 773.752103 100.630579 827.303504 100.630579 827.303504 94.601319 913.826726 190.98049 935.45197L542.323953 935.45197C542.323953 935.45197 594.540462 931.51404 632.673865 915.784567 632.673865 915.784567 664.800255 907.930955 662.797918 935.45197 662.797918 935.45197 668.827178 996.412018 652.763983 1004.26563 652.763983 1004.26563 612.605995 1025.890874 522.256083 1023.933033L201.014425 1023.933033C201.014425 1023.933033 120.698449 1025.890874 60.472591 964.953073 60.472591 964.953073-29.877321 900.055095 10.280667 679.820233 30.348537 607.068642 70.106058 542.103919 130.732384 493.024405 130.732384 493.024405 152.82484 470.442489 140.788567 453.6896 140.788567 453.6896-0.331721 224.310731 221.082296 50.59684 522.701047-112.393421 678.215916 174.808502 662.797918 148.911605 705.24747 220.194815 723.157265 351.770628 652.763983 453.6896Z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)