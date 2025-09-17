import { Bed, MapPin, Sofa } from 'lucide-react'
import React from 'react'

const Features = [
    {icon: <Sofa size={20}/>, text: "Beautiful interior" },
    {icon: <Bed size={20}/>, text: "Comfortable beds" },
    { icon: <MapPin size={20}/>,  text: "Great Location" },
    { icon: <Star size/>, text: "Beautiful and Walkable" },
]

const FeaturesMarque = () => {
  return (
    <div>
        <div>
            {Features.concat(Features).map((item, i) => (
                <span
                  key={i}
                  className='flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-full text-lg bg-white shadow-sm'
                >
                    {item.icon} {item.text}

                </span>
            ))}
        </div>
        <div> 
            {Features.concat(Features).map((item, i) => (
                <span
                  key={i}
                  className='flex items-center gap-2 border border-gray-300 py-6 px-3 rounded-full text-lg bg-white shadow-sm'
                >
                    {item.icon} {item.text}
                </span>
            ))}
        </div>
    </div>
  )
}

export default FeaturesMarque