import { RedocStandalone } from 'redoc';


export default function reDocComp() {
    return (
        <RedocStandalone specUrl="/openapi.yaml"   options={{
            nativeScrollbars: true,
            lazyRendering : true,
            hideLoading : true,
            theme: { colors: { primary: { main: '#000000' } } },
          }}/>

    )
  }