import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section>
      <div className="h-screen flex flex-col items-center justify-center space-y-5">
        <h1 className="inline-block bg-gradient-to-r from-blue-800 to-purple-800 text-transparent font-extrabold text-5xl bg-clip-text">PlayScape</h1>
        <p>Welcome to a new generation.</p>
        <Button>Play Now</Button>
      </div>
    </section>
  )
}
