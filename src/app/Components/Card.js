import React from 'react'

function Card({desc,image}) {
  return (
    <div>
        {image.map((img) => (
                    <div className="">
                        <Image src={img} width={160}  className='rounded-xl '/>
                    </div>
                ))}
                {desc.map((desc) => (
                    <div className="">
                        {desc}
                    </div>
                ))}



    </div>
  )
}

export default Card