import React from "react"
import { Helmet } from "react-helmet"

const Metatags = ({ title }) => {
  return (
    <Helmet>
      <meta name="theme-color" content="#4697DC" />
      <meta name="description" content="Author: Novia,
        Name Web : Explore Repositories, Category: Github"/>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter&family=Mulish:wght@400;600;700&family=Open+Sans&display=swap"
        rel="stylesheet" />
      <title>{title}</title>
    </Helmet>
  )
}

export default Metatags