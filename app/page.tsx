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


export default function Home() {
  return (
    <header>
    <div className="flex  items-center  justify-between  gap-4" >
        <div className="flex items-center ">
            <a href="#"><Image src="./assets/logo.svg" width={20} height={20} alt="logo" /></a>
            
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
                <input type="text" className="form-control"  id="exampleInputSearch" aria-describedby="Search area" placeholder="Search"  />
                <label className="text-center" for="floatingInput "><i className="bi bi-search "></i> Search</label>
            </form>
            <a>Buy</a>
            <a>Sell</a>    
            <div className="dropdown">
                <button className="btn greyed  dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    🇵🇹 € EUR
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li><a className="dropdown-item" href="#">€ EUR</a></li>
                    <li><a className="dropdown-item" href="#">$ USD</a></li>
                    <li><a className="dropdown-item" href="#">£ GBP</a></li>
                </ul>
            </div>  
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
}
