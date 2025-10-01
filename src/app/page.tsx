import Image from "next/image";
import Header from './components/ui/header';
import Wrapper from './components/sections/wrapper'
import VideoWrapper from "./components/sections/video-wrapper"

export default function Home() {
  return (
    <main>
      <Header />
      <Wrapper />
      <VideoWrapper />
    </main>
  )
}
