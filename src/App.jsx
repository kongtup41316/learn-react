import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "./components/Header";


function App() {
  return (
    <div className="flex min-h-svh flex-col">
      <Header></Header>
      <main className="flex flex-1 items-center justify-center">
        <div className="flex flex-col border border-black-100 rounded-sm px-15 py-20">
          <Input
            type="email"
            placeholder="Email"
            className="h-8 px-2 py-1 text-sm w-64"
          />
          <Input
            type="text"
            placeholder="Password"
            className="h-8 px-2 py-1 text-sm w-64 mt-5"
          />
          <Button className="mt-10 hover:bg-red-800 transition-colors duration-300">Submit</Button>
        </div>
      </main>
    </div>
  );
}

export default App;
