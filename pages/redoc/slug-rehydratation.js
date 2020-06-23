import ErrorPage from "next/error";
import { RedocStandalone } from "redoc";
import Head from "next/head";
import { useRouter } from "next/router";
import { PROJECT_TITLE } from "@/lib/constants";
import useSWR from "swr";

export default   function ReDoc() {
  // console.log('params', slug)
  const router = useRouter();
  const { slug } = router.query;
  const url = `https://raw.githubusercontent.com/rubenmarcus/nextjs-poc/master/public/${router.query.slug}.yaml`;
//   const { data } = fetchRedoc(router.query.slug)
//     console.log(data, data);

    if (!slug) {
        return null;
      } else {
    
        if(router.query.url) {
           return RedocHtml(router.query.url) 

        } 
    }

//  return slug? : null;


//  return <div> aaaa</div>


//   if(router.query.slug) {

//     const { data } = fetchRedoc(router.query.slug)
    
//     console.log(data , 'data')
//     return <div>aaa</div>
//   }
//   if (!data) return <div>loading...</div>;
//   return (
//     <div>
//       <Head>
//         <title>{PROJECT_TITLE}</title>
//         <link rel="shortcut icon" href="/favicon.png" />
//       </Head>

//       <div>{data.status == "200" ? RedocHtml(url) : <ErrorPage statusCode={404} />}</div>
//     </div>
//   );
}

const RedocHtml = (url) => {
  return (
    <div>
      <RedocStandalone
        specUrl={url}
        options={{
          nativeScrollbars: true,
          lazyRendering: true,
          hideLoading: true,
          theme: { colors: { primary: { main: "#000000" } } },
        }}
      />
    </div>
  );
};

export async function fetchRedoc(endpoint) {
    const url = `https://raw.githubusercontent.com/rubenmarcus/nextjs-poc/master/public/${endpoint}.yaml`;
  
    const res = await fetch(url, {
      method: "GET"
    }).then(function(response) {
        console.log(response.blob(), 'resss') ;
      });
  
   
    // return res.blob();
  }