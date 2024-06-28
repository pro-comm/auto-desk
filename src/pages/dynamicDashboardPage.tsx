import { useEffect } from "react";
import { useParams } from "react-router";

const DynamicDashboardPage = () => {
    const { subRouteName } = useParams();
    console.log('params subRouteName container', subRouteName)

    return (
        <> <div className="ml-8">
               Dynamic URL : {subRouteName}
            </div>
          {/*Get the component based on dynamic route*/}
        </>
    );
}     
export default DynamicDashboardPage;