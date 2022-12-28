/* eslint-disable */

const initInspectlet = () => {
  window.__insp = window.__insp || []
  __insp.push(['wid', 1772006499])
  const ldinsp = function () {
    if (typeof window.__inspld !== 'undefined') return
    window.__inspld = 1
    const insp = document.createElement('script')
    insp.type = 'text/javascript'
    insp.async = true
    insp.id = 'inspsync'
    insp.src = `${document.location.protocol == 'https:' ? 'https' : 'http'}://cdn.inspectlet.com/inspectlet.js?wid=1772006499&r=${Math.floor(new Date().getTime() / 3600000)}`
    insp.defer = true
    const x = document.getElementsByTagName('script')[0]
    x.parentNode.insertBefore(insp, x)
  }
  setTimeout(ldinsp, 0)
}

export default initInspectlet
