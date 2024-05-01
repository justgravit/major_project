import React from 'react'

function QuizNavigate({ questionArr, setNum, set_idx, sel_idx }) {
  console.log("ww", questionArr);

  return (
    <div class="bg-gray-200 p-2 flex flex-wrap justify-center">

      {
        questionArr.map((curQ, idx) => {
          return (
            <div className='m-2'>
              <button className='' onClick={() => {
                setNum(idx);
              }}>
                {sel_idx[idx] !== 'NA' ? <div className="bg-green-400 box-border h-10 w-10  border border-black flex items-center justify-center font-bold rounded-md" >
                  {idx + 1}
                </div>
                  :
                  <div className="bg-white box-border h-10 w-10  border border-black flex items-center justify-center rounded-md" >
                    {idx + 1}
                  </div>}
              </button>
            </div>
          )
        })
      }


    </div>
  )
}

export default QuizNavigate
