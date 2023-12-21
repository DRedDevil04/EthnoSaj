import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'
const Breads = () => {
  return (
    <Breadcrumb color={"#FFC300"} fontSize="2xl" fontStyle={"bold"} fontFamily="Cursive">
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Catalog</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Lehenga</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
  )
}

export default Breads;