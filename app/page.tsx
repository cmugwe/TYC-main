import AnnualConferenceCard from '@/components/AnnualConferenceCard'
import GetInTouchCard from '@/components/GetInTouchCard'
import Hero from '@/components/Hero'
import HeroText from '@/components/HeroText'
import LandingSection1 from '@/components/LandingSection1'
import OpportunitiesCard1 from '@/components/OpportunitiesCard1'
import MoretoExplore from '@/components/MoretoExplore'
import SubscribeForm from '@/components/SubscribeForm'
import Image from 'next/image'
import SupportOurWorkCard from '@/components/SupportOurWorkCard'


export default function Home() {
  return (
    <>

    <div className="w-full lg:flex">
        <HeroText/>
    </div>

    
    <main className="flex flex-col w-full  ">
      <div className="flex-col my-5 text-sm lg:flex">

       <Hero/> 
       
      </div>

    </main>
    

    <section className='block p-2 md:px-10 md:py-8 bg-[#3FE2D3] min-h-[570px]'>
      <div className='text-start'>
        <LandingSection1/>
      </div>
    </section>

    <section className='p-2 md:px-10 md:py-8 bg-red-700 md:min-h-[600px]'>
          <div className=''>
            <AnnualConferenceCard/>
          </div>
        </section>

    <section className='bg-[#0E3930] max-w-max'>
      <div className=''>
        <OpportunitiesCard1/>
      </div>
    </section>

    <section className='block p-2 md:px-10 md:py-8 md:min-h-[575px]'>
      <div className='text-start'>
        <SupportOurWorkCard/>
      </div>
    </section>

    <section className=''>
      <div className=''>
        <MoretoExplore/>
      </div>
    </section>


    <section className=''>
      <div className=''>
        <GetInTouchCard/>
      </div>
    </section>

    <section className=''>
      <div className=''>
        <SubscribeForm/>
      </div>
    </section>



    </>
  )
}
