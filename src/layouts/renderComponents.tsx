import LabelComponent from "../components/labelComponents";

interface Props{
    widgetList: Array<string>
}
const RenderComponents = (props: Props) => {
    const showComponentsBasedOnTypes: any = {
        'label': {
            props: {},
            component: <LabelComponent/>
        }
    }
    const {widgetList} = props;
    return (
        <div>
            {widgetList?.length && widgetList.map((w: string)=>{
                        return <>
                           {showComponentsBasedOnTypes[w].component}
                        </>
                    }) || <div className="text-center">Placeholder</div>} 
        </div>
    );
};
export default RenderComponents;