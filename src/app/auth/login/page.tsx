import LoginLayout from '@/components/layout/auth/LoginLayout'
import React, { Suspense } from 'react'

function page() {
  return (
    <div>
      <Suspense fallback={null}>
        <LoginLayout />
      </Suspense>
    </div>
  )
}

export default page
