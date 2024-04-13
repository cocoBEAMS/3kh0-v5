import { Button } from "@/components/ui/button"; // Assuming Button component imports necessary libraries

export default function Home() {
  const handleClick = () => {
    window.location.href = "https://your-desired-url.com"; // Replace with your actual URL
  };

  return (
    <section>
      <div className="h-screen flex flex-col items-center justify-center space-y-5">
        <h1 className="inline-block bg-gradient-to-r from-blue-800 to-purple-800 text-transparent font-extrabold text-5xl bg-clip-text">PlayScape</h1>
        <p>Welcome to a new generation.</p>
        <Button onClick={handleClick}>Play Now</Button>
      </div>
    </section>
  );
}
