import AuthLayout from '@/components/layout/auth/AuthLayout'
import React, { Suspense } from 'react'

function page() {
  return (
    <Suspense fallback={null}>
      <AuthLayout />
    </Suspense>
  )
}

export default page