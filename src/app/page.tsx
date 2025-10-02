import Image from 'next/image'

import BreadCrumbs from './components/sections/breadCrumbs'
import HighLight from './components/sections/highlights'
import VideoWrapper from './components/sections/video-wrapper'
import Wrapper from './components/sections/wrapper'
import Footer from './components/ui/footer'
import Header from './components/ui/header'


export default function Home() {
  return (
    <main>
      <Header />
      <Wrapper />
      <VideoWrapper />
      <HighLight />
      <BreadCrumbs />
      <Footer />
    </main>
  )
}
