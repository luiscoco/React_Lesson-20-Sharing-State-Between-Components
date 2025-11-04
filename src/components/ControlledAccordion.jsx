import React, { useState } from 'react'
import Panel from './Panel.jsx'

export default function ControlledAccordion() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <h2 className="section-title">Controlled Accordion</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples".
      </Panel>
    </>
  )
}
