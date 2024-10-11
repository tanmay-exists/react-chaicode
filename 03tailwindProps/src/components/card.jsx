import React from 'react'

function Card(props){
    // inplace of props above, directly '{username}' can be passed. then we can use '{username}' in place of '{props.username }' in the below div of usernamne
    console.log('props', props)
    return(
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-4">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://picsum.photos/200" alt="" width="384" height="512" />
        {/* image tag should be closed using '/>' in tailwind */}
          <div className="pt-6 space-y-4">
            <blockquote>
              <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div>
                {props.username}    {/* here we can write '{username}' if '{username}' was passed in functin instead of 'props' */}
              </div>
              <div>
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
          <button className='mt-4'>End</button>
          <p>{props.btnText || 'visitMe'}</p>
      </figure>
    )
}

export default Card


// (
//     function Card({username, btnText='visitMe'}){   // visitMe is default value here i.e. it will be used when no value is provided in the btnText
//         // inplace of props above, directly '{username}' can be passed. then we can use '{username}' in place of '{props.username }' in the below div of usernamne
//         console.log('props', props)
//         return(
//             <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-4">
//             <img className="w-24 h-24 rounded-full mx-auto" src="https://picsum.photos/200" alt="" width="384" height="512" />
//             {/* image tag should be closed using '/>' in tailwind */}
//               <div className="pt-6 space-y-4">
//                 <blockquote>
//                   <p className="text-lg font-medium">
//                     “Tailwind CSS is the only framework that I've seen scale
//                     on large teams. It’s easy to customize, adapts to any design,
//                     and the build size is tiny.”
//                   </p>
//                 </blockquote>
//                 <figcaption className="font-medium">
//                   <div>
//                     {username}    {/* here we can write '{username}' if '{username}' was passed in functin instead of 'props' */}
//                   </div>
//                   <div>
//                     Staff Engineer, Algolia
//                   </div>
//                 </figcaption>
//               </div>
//               <button className='mt-4'>End</button>
//               <p>{btnText}</p>
//           </figure>
//         )
//     }   
// )