import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const BreadCrumb = ({ data }) => {
  const [pageList, setPageList] = useState([])
  useEffect(() => {

    const items = data.map((item, idx) => (item.active) ?
      <li key={idx} className="breadcrumb-item active text-color7" aria-current="page">{item.name}</li>
      :
      <li key={idx} className="breadcrumb-item"><Link href={item.href}>
        <a className="text-decoration-none text-color1">
          {item.name}
        </a>
      </Link></li>
    )
    setPageList(items)
  }, [])
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {pageList}
      </ol>
    </nav>
  )
}

export default BreadCrumb
