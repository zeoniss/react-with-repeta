import React from "react"

const Panel = ({ title, children }) => (
  <div>
    <h1>{title}</h1>

    {children}
  </div>
)

export default Panel
