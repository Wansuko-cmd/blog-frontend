import type { NextPage } from 'next'
import BaseCard from "../components/common/BaseCard";
import ArticleCard from "../components/article/card/ArticleCard";

const Home: NextPage = () => {
  return (
      <>
          <div className='m-5'>
              <ArticleCard src='/dev/Kotlin.png' alt='kotlin' title='Hello' modifiedAt='modifiedAt'/>
          </div>
      </>
  )
}

export default Home
