import React, { useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
 
const alanKey = 'e83c6d4a0a2ea512201cde347f5d42302e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => { 

    useEffect(() =>{
        alanBtn({
            key: alanKey,
            onCommand: ({ command,articles }) =>{
                if(command === 'newHeadlines'){
               console.log(articles);
             }
            
            }
        })

    },[])

     return (
         <div>
             <h1>Alan AI News</h1>
         </div>
     )
 }
 
 export default App;