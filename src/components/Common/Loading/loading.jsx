import React,{memo} from 'react'
const Loading = () => {

  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600'></div>
</div> 
  
  )
}

export default memo(Loading)