import React from 'react'
import { Helmet } from 'react-helmet'

let TITLE = 'Test Mercado Libre'

let url = window.location.href;

if (url.includes("items?search")){
    let url_limpia = window.location.href.replace("/items?search=", "").replace(window.location.origin, "")
    TITLE = url_limpia + " - Test Mercado Libre"
}

if (url.includes("items/")){
    let url_limpia = window.location.href.replace("/items/", "").replace(window.location.origin, "")
    TITLE = url_limpia + " - Test Mercado Libre"
}

class Title extends React.PureComponent {

  render () {
    return (
      <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      </>
    )
  }
}

export default Title 