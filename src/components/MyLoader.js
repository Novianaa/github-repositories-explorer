import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    width={900}
    height={200}
    viewBox="0 0 900 200"
    backgroundColor="#e6e6e6"
    foregroundColor="#ededed"
    {...props}
  >
    <rect x="88" y="13" rx="5" ry="5" width="250" height="10" />
    <circle cx="49" cy="27" r="25" />
    <rect x="88" y="34" rx="5" ry="5" width="170" height="10" />
    <rect x="571" y="13" rx="5" ry="5" width="250" height="10" />
    <circle cx="532" cy="27" r="25" />
    <rect x="571" y="34" rx="5" ry="5" width="170" height="10" />
    <rect x="571" y="84" rx="5" ry="5" width="250" height="10" />
    <circle cx="532" cy="98" r="25" />
    <rect x="571" y="105" rx="5" ry="5" width="170" height="10" />
    <rect x="88" y="86" rx="5" ry="5" width="250" height="10" />
    <circle cx="49" cy="100" r="25" />
    <rect x="88" y="107" rx="5" ry="5" width="170" height="10" />
    <rect x="88" y="160" rx="5" ry="5" width="250" height="10" />
    <circle cx="49" cy="174" r="25" />
    <rect x="88" y="181" rx="5" ry="5" width="170" height="10" />
  </ContentLoader>
)

export default MyLoader