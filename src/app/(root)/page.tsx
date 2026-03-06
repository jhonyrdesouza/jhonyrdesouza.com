import Container from "@/components/layout/container"
import GetInTouch from "@/features/home/components/get-in-touch"
import Hero from "@/features/home/components/hero"
import { cn } from "@/lib/utils"

const HomePage = () => {
  return (
    <div className={cn("flex flex-col")}>
      <Hero />
      <Container className={cn("gap-8")}>
        <GetInTouch />
      </Container>
    </div>
  )
}

export default HomePage
