import React,{useEffect, useState} from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import Error from "../pages/Error"
import Cards from '../components/Cards';
import { getAllImages } from "./prooducts";
import Loading from '../components/Loader';


export default function CallingOffers() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getAllImages().then((res) =>{
          setData(res.data)
          setIsLoading(false)
        })
    }, [])

  return (
    <ErrorBoundary FallbackComponent={Error} onReset={() => { }}>
      {isLoading ?
          (<Loading data-tested='loader' />)
          :
          <div className="card_service">
            {
              data.map(({_id, title, price, imageUrl, description, altTxt, icon}, index)=>(
                <article key={`${_id} + ${index}`} className='article_service' data-testid="article_service">
                  <Cards _id={_id} title={title} icon={icon}  price={price} imageUrl={imageUrl} altTxt={altTxt} description={description} />
                </article>
              ))
            }
          </div>
      }
    </ErrorBoundary>
  )
}



