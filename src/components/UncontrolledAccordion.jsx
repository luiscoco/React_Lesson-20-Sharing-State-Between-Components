import React, { useState } from 'react'

function UncontrolledPanel({ title, children }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <section className="panel">
      <h3 className="panel-title">{title}</h3>
      {isActive ? (
        <div className="panel-body">{children}</div>
      ) : (
        <button className="btn" onClick={() => setIsActive(true)}>Show</button>
      )}
    </section>
  )
}

export default function UncontrolledAccordion() {
  return (
    <>
      <h2 className="section-title">Uncontrolled Accordion</h2>
      <UncontrolledPanel title="About">
        With a population of about 2 million.
      </UncontrolledPanel>
      <UncontrolledPanel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples".
      </UncontrolledPanel>
    </>
  )
}
