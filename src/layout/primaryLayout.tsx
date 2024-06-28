import { Outlet } from "react-router";
import LeftNav from '../shared/components/macro/leftNavBar' 
import TopPanel from '../shared/components/macro/topPanel' 
import { useState } from "react";
const PrimaryLayout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (<>
            <div className="h-full">
                {isLoggedIn && <div className="flex h-full">
                    <div className="h-full">
                        <LeftNav/>
                    </div>
                    <div className="">
                        <TopPanel/>
                        <main>
                            <Outlet />
                        </main>
                    </div>
                </div>}
          </div>
    </>);
};
export default PrimaryLayout;