import Link from 'next/link'

import Header from '../components/header'
import { Button } from 'react-toolbox/lib/button'

export default () => (
  <div>
    <Header />
    <div style={{marginTop: '70vh', textAlign: 'center'}}>
      <Link prefetch href='/bazinga'>
        <Button raised primary> Click Me! </Button>
      </Link>
    </div>
  </div>
)
