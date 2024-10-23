import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import categories from "@/const/const "
import logo from "@/assets/logo.svg"
import { Input } from "@/components/ui/input"

interface NavProps {
  // Define props here
}

const Nav: React.FC<NavProps> = ({ }) => {
  return (
    <header>
    <div className="flex  items-center  justify-between  gap-4" >
        <div className="flex items-center ">
            <a href="#">
              <Image src={logo} width={100} height={100} alt="logo" />
            </a>
            
            <DropdownMenu  >
              <DropdownMenuTrigger className="flex-stretch btn greyed justify-stretch" >Categories</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>All</DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                {categories.map( function(category:any) {
                  return (
                    <DropdownMenuItem key={category}>{category}</DropdownMenuItem>
                  )
                })

                }
              </DropdownMenuContent>
            </DropdownMenu>
            
            
        </div>
        <div className="flex  items-center col gap-5" >
            <form className="form-floating col flex items-center text-center" >
              <Input type="search" placeholder="Search" onClick={} />
            </form>
            <a>Buy</a>
            <a>Sell</a> 

            <DropdownMenu  >
              <DropdownMenuTrigger className="flex-stretch btn greyed justify-stretch" >€ EUR</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Currency</DropdownMenuLabel>
                <DropdownMenuSeparator />
                
                
                    <DropdownMenuItem >€ EUR</DropdownMenuItem>
                    <DropdownMenuItem >$ USD</DropdownMenuItem>
                    <DropdownMenuItem >£ GBP</DropdownMenuItem>
                 
              </DropdownMenuContent>
            </DropdownMenu>
               
             
        </div>
        <div className="col-md-2 d-inline-flex gap-2 ">
            <a href="/register" className="underline-none fit-100">
                <button className="btn-white  fit-100">
                    <i className="bi bi-person-circle"></i> &nbsp; Log in / Register
                </button>
            </a>
            <a ><i className="bi bi-star fs-4 " ></i></a>
            <a ><i className="bi bi-cart fs-4" ></i></a>
        </div>
    </div>
    
    
</header>
  );
};

export default Nav;