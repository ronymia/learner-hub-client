//img import
import bannerImg from '../../../assets/images/banner.png';

export default function Banner() {
     return (
          <section className="bg-[#F0FFF0] h-[75vh] md:h-[70vh] grid grid-cols-1 md:grid-cols-2 px-6 md:px-28 gap-y-10 md:gap-x-6 items-center justify-start">
               {/* Left side  */}
               <div className="w-full md:w-3/4 flex flex-col items-start justify-start gap-y-2 md:gap-y-5 md:order-1 order-2">
                    <h6 className="text-[#FD511A]">Are you ready to Learn?</h6>
                    <h3 className='text-4xl md:text-5xl text-black font-bold leading-snug'>
                         Learn With fun <br />
                         <span className='text-[#21B573]'>on any schedule</span>
                    </h3>
                    <p className='text-[#6C6B6B] leading-relaxed'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius blandit facilisis quam netus.</p>
                    <button type="button"
                         className='bg-[#21B573] text-white px-4 py-3 rounded font-medium'
                    >
                         Get Started
                    </button>
               </div>

               {/* right side  */}

               <div className="md:order-2 order-1">
                    <img src={bannerImg} alt="" />
               </div>
          </section>
     )
}
