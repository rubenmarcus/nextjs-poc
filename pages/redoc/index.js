

import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../../components/redoc'), {
  ssr: true
})

export default () => <DynamicComponentWithNoSSR />