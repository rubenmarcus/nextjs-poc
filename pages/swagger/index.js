

import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('../../components/swagger'), {
  ssr: false
})

export default () => <DynamicComponentWithNoSSR />