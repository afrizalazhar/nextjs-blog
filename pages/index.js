import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostData = getSortedPostsData()
  return { 
    props: {
      allPostData
    }
  }
}

export default function Home({ allPostData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className ={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <p>Aing Ganteng</p>
        <ul className={utilStyles.list}>
          {allPostData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`} key={id}>
                <a>{title}</a>
              </Link>
              <br/>
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
