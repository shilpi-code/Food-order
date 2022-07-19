import React from 'react'

function RowContainer({flag}) {
  return (
    <div className={`w-full my-12 bg-black ${flag ? "overflow-x-scroll" : "overflow-x-hidden" }`}></div>
  )
}

export default RowContainer