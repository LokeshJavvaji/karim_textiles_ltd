"use client"
import Hero from '@/components/Hero/hero'
import KnowMore from '@/components/KnowMore/KnowMore'
import TechTips from '@/components/TechTips/TechTips'
import Welcome from '@/components/welcome/welcome'

const Landing = () => {

  return (
    <>
      <div className='flex flex-col gap-2'>
        <Hero />
        <Welcome />
        <TechTips />
        <KnowMore />
      </div>
    </>
  )
}

export default Landing