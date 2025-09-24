// // import { NavLink } from "react-router-dom";

// // const Navbar = () => {
// //   return (
// //     <div>
// //       <ul>
// //         <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/home">Home</NavLink></li>
// //         <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/project">Project</NavLink></li>
// //         <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/contact">Contact</NavLink></li>
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Navbar;

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuList,
//   NavigationMenuLink,
// } from "@/components/ui/navigation-menu"
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTrigger,
// } from "@/components/ui/sheet"
// import { Menu } from "lucide-react"

// const Navbar = () => {
//   const [open, setOpen] = useState(false)

//   const links = [
//     { name: "Home", href: "/" },
//     { name: "Project", href: "/project" },
//     { name: "Contact", href: "/contact" },
//   ]

//   return (
//     <header className="w-full border-b bg-white sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

//         {/* Logo */}
//         <h1 className="text-xl font-bold">MyLogo</h1>

//         {/* Desktop Menu */}
//         <NavigationMenu className="hidden md:flex">
//           <NavigationMenuList>
//             {links.map((link) => (
//               <NavigationMenuItem key={link.name}>
//                 <NavigationMenuLink
//                   href={link.href}
//                   className="px-3 py-2 text-sm font-medium hover:text-primary"
//                 >
//                   {link.name}
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//             ))}
//           </NavigationMenuList>
//         </NavigationMenu>

//         {/* Login */}
//         <Button variant="outline">Login</Button>

//         {/* Mobile Menu (Sheet) */}
//         <Sheet open={open} onOpenChange={setOpen}>
//           <SheetTrigger asChild className="md:hidden">
//             <Button variant="ghost" size="icon">
//               <Menu className="w-6 h-6" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="w-[240px]">
//             <SheetHeader>
//               <h2 className="text-lg font-bold">Menu</h2>
//             </SheetHeader>
//             <nav className="mt-4 flex flex-col gap-3">
//               {links.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="px-2 py-2 rounded-md hover:bg-gray-100"
//                   onClick={() => setOpen(false)}
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </nav>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   )
// }

// export default Navbar

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="w-full bg-white shadow-md sticky top-0 left-0 z-50">
        <div className=" container mx-auto">
          <div className="w-full flex items-center justify-between py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-indigo-600">MyLogo</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "active-item" : "pending-item"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  isActive ? "active-item" : "pending-item"
                }
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "active-item" : "pending-item"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button>Get Started</Button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-500 opacity-50 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Offcanvas Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <span className="text-xl font-bold text-indigo-600">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className="flex flex-col gap-4 p-6 text-gray-700 font-medium w-full">
          <li>
            <NavLink
              to="/home"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? "active-item" : "pending-item"
                } block w-full px-4 py-2`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? "active-item" : "pending-item"
                } block w-full px-4 py-2`
              }
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `${
                  isActive ? "active-item" : "pending-item"
                } block w-full px-4 py-2`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="px-6">
          <Button className="w-full">Get Started</Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
