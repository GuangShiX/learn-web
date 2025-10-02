import Image from 'next/image'
import Header from './components/ui/header'
import Footer from './components/ui/footer'
import Wrapper from './components/sections/wrapper'
import VideoWrapper from './components/sections/video-wrapper'
import HighLight from './components/sections/highlights'
import BreadCrumbs from './components/sections/breadCrumbs'


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
