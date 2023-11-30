import React, { Suspense } from "react"

export function withSuspense(Component) {
   return function (props) {
      return <Suspense fallback={<h1>Loading...</h1>} ><Component {...props} /></Suspense>
   }
}







