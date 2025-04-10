import { ReactNode } from 'react'

type Prop = {
  children: ReactNode
}

export default function Container({ children }: Prop) {
  return (
    <div className='mx-auto max-w-[735px] rounded-2xl bg-white md:my-32 md:p-11'>
      {children}
    </div>
  )
}
