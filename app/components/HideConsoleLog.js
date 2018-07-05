var React = require('react')

function HideConsoleLog () {
  return (
    <div>
      {
        // se for local mostra os console.log's
        window.location.hostname === 'localhost' || window.location.origin === 'file://' ? 
          null : 
            // se for local e não tiver o paremetro ?dev na url
            window.location.search !== '?dev' ?
              // oculta todos e quaisquer console.log's
              console.assert = 
                console.clear = 
                  console.constructor = 
                    console.count = 
                      console.debug =  
                        console.dir = 
                          console.dirxml = 
                            console.error = 
                              console.group = 
                                console.groupCollapsed = 
                                  console.groupEnd = 
                                    console.info = 
                                      console.log = 
                                        console.markTimeline = 
                                          console.profile = 
                                            console.profileEnd = 
                                              console.table = 
                                                console.time = 
                                                  console.timeEnd = 
                                                    console.timeStamp = 
                                                      console.timeline = 
                                                        console.timelineEnd = 
                                                          console.trace = 
                                                            console.warn = 
                                                              function() { return false } : 
              null
      }
    </div>
  )
}

module.exports = HideConsoleLog