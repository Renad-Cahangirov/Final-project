import Banner from '@/components/Banner'
import Comment from '@/components/Comment'
import Paket from '@/components/Paket'
import Popularproduct from '@/components/Popularproduct'
import Process from '@/components/Process'
import Processdecoration from '@/components/Processdecoration'
import Processpart2 from '@/components/Processpart2'
import Processpart3 from '@/components/Processpart3'
import Processpart4 from '@/components/Processpart4'
import Processpart5 from '@/components/Processpart5'
import React from 'react'
import Contact from './contact/page'

import Cup from '@/components/Cup'
import Cups from '@/components/Cup'
import Contacts from '@/components/Contacts'


const Home = () => {
  return (
<>
<Banner/>
<Process/>
<Processpart2/>
<Processpart3/>
<Processpart4/>
<Processpart5/>
<Processdecoration/>
<Paket/>
<Popularproduct/>
<Comment/>
<Contacts/>
<Cups/>
</>
  )
}

export default Home