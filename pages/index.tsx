import type { NextPage } from 'next'
import BaseCard from "../components/common/BaseCard";
import IndexArticleCard from "../components/index/article/IndexArticleCard";
import IndexArticlesHeading from "../components/index/article/IndexArticlesHeading";
import LayoutIntroductionCard from "../components/layout/sidebar/LayoutIntroductionCard";

const Home: NextPage = () => {
  return (
      <>
          <div className='m-5'>
              <IndexArticlesHeading text='Title' />
              <IndexArticleCard src='/dev/Kotlin.png' alt='kotlin' title='Hello' modifiedAt='modifiedAt'/>
          </div>

          <LayoutIntroductionCard/>
      </>
  )
}

export default Home
