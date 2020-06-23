
import ErrorPage from 'next/error'
import { RedocStandalone } from 'redoc';
import Head from 'next/head'
import { useRouter } from 'next/router'
import { PROJECT_TITLE, YAML_BASE_URL } from "@/lib/constants";
import useSWR from 'swr'


export default function ReDoc() {
   const router = useRouter()

    if(router.query.slug){
        const url =  `${YAML_BASE_URL + router.query.slug}.yaml`
        const isYaml = true;

        const { data, error } = useSWR(url, fetch)

        if (!data) return <div>loading...</div>
        if (data.status == '404')  return <ErrorPage statusCode={404} />
        return isYaml?  RedocTempl(isYaml, url) : RedocTempl(isYaml, '' , 'json')
    }
   
    return <div> a</div>      

}


const RedocTempl = (yaml, url, json) => {
    return <div>
    <Head>
      <title>{PROJECT_TITLE}</title>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    { yaml? 
    redocYaml(url) : 
    redocJson(json)
           }
    </div>
}


const redocYaml = (url) => {
    return  <div>
    <RedocStandalone specUrl={url}   options={{
        nativeScrollbars: true,
        lazyRendering : true,
        hideLoading : true,
        theme: { colors: { primary: { main: '#000000' } } },
      }}/>
 
    </div>
}

const redocJson = (json) => {

   return  <div>
    <RedocStandalone spec={yaml}   options={{
        nativeScrollbars: true,
        lazyRendering : true,
        hideLoading : true,
        theme: { colors: { primary: { main: '#000000' } } },
      }}/>
    </div>

}