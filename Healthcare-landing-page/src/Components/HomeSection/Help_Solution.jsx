
import { IoArrowUpOutline } from 'react-icons/io5'
import solution from '../../assets/Rectangle 24.png'

export const Help_Solution = () => {
  return (
    <div className="bg-[#FBFBFB] flex max-sm:flex-col justify-between items-center gap-6 my-20">
        {/* left side */}
        <div className='md:w-1/2 space-y-4'>
            <div className='border border-[#343268] rounded-full inline-block py-2 px-4 '>
                <p >Who we are</p>
            </div>
            <div className='space-y-4'>
                <h1 className='text-4xl font-semibold'>We Help To Get <br /> Solutions</h1>
                <p className='text-balance'>
                We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                </p>

                <div className="sm:flex sm:gap-4">
          <a
            className=" flex items-center gap-1 max-sm:justify-center bg-[#ffc637] rounded-xl px-5 py-2.5 font-medium  shadow"
            href="#"
          >
           Learn more <IoArrowUpOutline className="rotate-45 text-xl"/>
          </a>
        </div>
            </div>

        </div>
        {/* right side */}
        <div className='md:w-1/2 relative'>
            <img src={solution} alt="" className=''/>
            <div className='h-48 md:w-96 rounded-3xl bg-[#343268] px-8 py-8 space-y-2 md:absolute right-1/2 -bottom-8'>
                <h1 className='text-2xl font-medium text-white'>Our mission is simple</h1>
                <p className='text-gray-400'>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
            </div>
        </div>

    </div>
  )
}
