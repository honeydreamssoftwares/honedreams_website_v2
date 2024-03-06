import './App.css'
//import { Button } from "@/components/ui/button"
import {
  //Accordion,
  //AccordionContent,
 // AccordionItem,
  //AccordionTrigger,
} from "@/components/ui/accordion"
import { ThemeProvider } from "@/components/theme-provider"
import {ModeToggle} from "@/components/mode-toggle"
//import {ProfileForm} from "./ProfileForm"
import {
  NavigationMenu,
  NavigationMenuContent,
  //NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  //NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { TypewriterEffect } from "@/components/ui/typewriter-effect";

//import {NavigationBar} from './NavBar'

import {TextRevealCardHD} from "./TextRevealCardHD";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "software",
    },
    {
      text: "with",
    },
    {
      text: "Honeydreams.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        The road to freedom starts from here
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Signup
        </button>
      </div>
      <TextRevealCardHD></TextRevealCardHD>
    </div>
  );
}


export  function Home() {
  return (
    <div>
      <NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger> <ModeToggle></ModeToggle></NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Dark/Light Mode</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>


<TypewriterEffectDemo></TypewriterEffectDemo>
    </div>
  )
}


function App() {

  return (
    <>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <Home></Home>
     </ThemeProvider>
    
    </>
  )
}

export default App
