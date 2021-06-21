import React, { useState,useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

import NewsCards from './components/NewsCards/NewsCards'
 
const alanKey = 'e83c6d4a0a2ea512201cde347f5d42302e956eca572e1d8b807a3e2338fdd0dc/stage'

const App = () => { 
    const [newsArticles, setNewsArticles] = useState([]);

    useEffect(() =>{
        alanBtn({
            key: alanKey,
            onCommand: ({ command,articles }) =>{
                if(command === 'newHeadlines'){
               setNewsArticles(articles);
             }
            
            }
        })
    },[])

     return (
         <div>
             <h1>Alan AI News</h1>
             <NewsCards articles={newsArticles}/>
         </div>
     )
 }
 
 export default App;