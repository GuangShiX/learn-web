import Image from 'next/image'
import Header from './components/ui/header'
import Wrapper from './components/sections/wrapper'
import VideoWrapper from './components/sections/video-wrapper'
import HighLight from './components/sections/highlights'
import Footer from './components/sections/footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Wrapper />
      <VideoWrapper />
      <HighLight />
      <Footer />
    </main>
  )
}
