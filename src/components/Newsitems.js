import React from 'react'

const Newsitems = (props) => {

  let { title, description, imgset, newUrl, author, publishedAt, source } = props;
  return (
    <div className='flex justify-center items-center '>
      <div className=' w-60 p-2  bg-pink-200 rounded-xl transform transition-all hover:-translate-x-1 duration-150 shadow-lg hover:shadow-lg'>
        <div className='flex justify-end'>
        <a href={newUrl}  className='absolute text-white bg-red-400 rounded-md p-2 m-2 -top-4 hover:bg-red-500 ' >
          {source}
        </a>
        </div>
        <img src={imgset ? imgset : "https://media.npr.org/assets/img/2023/10/10/gettyimages-165997986_wide-f57b65cef4f78f7b59a3bd709c2594f0a242c298-s1400-c100.jpg"} className="h-40 object-cover rounded-md" alt="..." />
        <div className="p-2 text-left">
          <h5 className="font-bold ">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="p-2 "><small className="">By {!author ? "Unknown" : author} on {new Date(publishedAt).toGMTString()}</small></p>
          <a href={newUrl} className="text-white bg-purple-500 hover:bg-purple-600  px-3 py-1 rounded-lg">Read More</a>
        </div>
      </div>
    </div>
  )

}

export default Newsitems
