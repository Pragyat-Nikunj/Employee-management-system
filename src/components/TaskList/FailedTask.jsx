import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-purple-400 rounded-xl">
      <div className="flex justify-between">
        <h3 className="bg-red-600 font-bold px-3 py-1 text-sm">{data.category}</h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-3">
        {data.description}
      </p>
      <div className="mt-2">
        <button className=" w-full px-2 py-1 bg-red-400 rounded">
          Failed
        </button>
      </div>
    </div>
  );
}

export default FailedTask
