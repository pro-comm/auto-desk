import RenderComponents from "./renderComponents";

interface Props{
    handleWidgetData: Function,
    widgetList: Array<string>,
    apiKey: string,
    column?: string
}
const SinglePlaceholder = (props:Props) => {
    const {handleWidgetData, widgetList, apiKey, column} = props;
    const handleOnDrop = (e: React.DragEvent)=>{
        const widgetType =  e.dataTransfer.getData(apiKey);
        if(!column){
            handleWidgetData(widgetType)
        }else{
            handleWidgetData({[column]: [widgetType]})
        }
     }
 
     const handleDragOver = (e: React.DragEvent)=>{
         e.preventDefault();
     }
    return (
        <>
           <div onDrop={handleOnDrop} onDragOver={handleDragOver} className="border-dashed border-2 border-[#eee] pl-2">
                    <RenderComponents widgetList={widgetList}/>
                </div>
        </>
    );
};
export default SinglePlaceholder;