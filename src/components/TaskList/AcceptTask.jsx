import React from 'react'

const AcceptTask = ({data, onTaskCompleted, onTaskFailed}) => {
  

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
      <div className="flex justify-between">
        <h3 className="bg-red-600 font-bold px-3 py-1 text-sm">{data.category}</h3>
        <h4 className="text-sm">{data.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-3">
        {data.description}
      </p>
      <div className="flex justify-between mt-4">
        <button onClick={onTaskCompleted} className="bg-green-500 hover:bg-green-600 px-2 py-1 rounded text-sm">
          Mark as Completed.
        </button>
        <button onClick={onTaskFailed} className="bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-sm">
          Mark as Failed.
        </button>
      </div>
    </div>
  );
}

export default AcceptTask
