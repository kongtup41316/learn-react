import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "./Header";

export default function LoginPage(){
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            {/* login-box */}
            <div className="flex flex-grow items-center justify-center">
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
            </div>
        </div>
    );
}