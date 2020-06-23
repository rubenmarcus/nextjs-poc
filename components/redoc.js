import { RedocStandalone } from 'redoc';


export default function reDocComp() {
    return (
        <RedocStandalone specUrl="https://raw.githubusercontent.com/rubenmarcus/nextjs-poc/master/public/openapi.yaml"   options={{
            nativeScrollbars: true,
            lazyRendering : true,
            hideLoading : true,
            theme: { colors: { primary: { main: '#000000' } } },
          }}/>

    )
  }