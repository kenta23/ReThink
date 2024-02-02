'use client'

import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='w-full h-screen m-auto flex items-center text-center'>
        <div className='w-full mx-auto'>
            <h1>The page you visited not found!</h1>
            <p>Please go back to the homepage</p>
            <Link className='font-medium underline' href={'/'}>Go back</Link>
        </div>
    </div>
  )
}
