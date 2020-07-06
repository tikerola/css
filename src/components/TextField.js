import React, { useState, useEffect } from 'react'
import './TextField.scss'
import { useStyle } from '../context/gridContext'

const placeholder = `{
  border-radius: 50px;
}`


export default function TextField(props) {

  const [text, setText] = useState(placeholder)
  const [send, setSend] = useState(false)

  const [styles, setStyles] = useStyle({})

  useEffect(() => {

    if (send) {
      const obj = createCSSObject()
      setStyles(obj)
      setSend(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [send])

  const createCSSObject = () => {

    // remove line changes, curly brases, whitespaces and split statements
    const strArray = text
      .replace(/(\r\n|\n|\r)/gm, "")
      .replace(/[{}]/g, '')
      .trim().split(';')


    const cssObject = {}

    for (let i = 0; i < strArray.length - 1; i++) {
      const lineArray = strArray[i].split(':')
      cssObject[lineArray[0]] = lineArray[1].trim()
    }

    return cssObject
  }

  return (
    <React.Fragment>
      <textarea className="TextField-textarea" value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => setSend(true)}>Send</button>
    </React.Fragment>
  )
}