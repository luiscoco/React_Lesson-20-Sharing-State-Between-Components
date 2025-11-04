import React from 'react'

export default function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3 className="panel-title">{title}</h3>
      {isActive ? (
        <div className="panel-body">{children}</div>
      ) : (
        <button className="btn" onClick={onShow}>Show</button>
      )}
    </section>
  )
}
