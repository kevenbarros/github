import LogoGitHub from "@/assets/logoGithub.svg";
import { Input } from "./ui/input";

export function Header() {
  return (
    <header className="w-full bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center space-x-4">
          <div className="flex items-center space-x-3">
            <img className="w-6" src={LogoGitHub} alt="GitHub Explorer Logo" />
            <div className="flex items-center gap-6 text-white">
              <h1 className="text-3xl font-bold tracking-tight">{"GitHub"}</h1>
              <span className="text-2xl font-bold">/</span>
              <p className="text-white">{"Profile"}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Input
              type="text"
              searchParam="searchUser"
              placeholder="Search user..."
              className="w-64 bg-amber-50"
            />
            <button className="bg-amber-50 p-2 rounded-md">Search</button>
          </div>
        </div>
      </div>
    </header>
  );
}
