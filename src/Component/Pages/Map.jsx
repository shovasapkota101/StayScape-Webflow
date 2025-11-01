import React from 'react'

const Map = () => {
  return (
    <div className="relative flex justify-center mt-40 mb-30">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67312.4014984501!2d85.30562536429123!3d27.73126441828219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1d62f7975825%3A0xba22d46129f372b1!2sAirbnb%20Qeva%E2%80%99s%20home!5e0!3m2!1sen!2snp!4v1761883308241!5m2!1sen!2snp"
           className="rounded-3xl w-[95%] h-[700px] border-none"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map