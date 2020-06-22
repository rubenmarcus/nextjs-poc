

import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../../components/redoc'), {
  ssr: false
})

export default () => <DynamicComponentWithNoSSR />