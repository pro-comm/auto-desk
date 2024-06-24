import { useState } from "react";
import LabelComponent from "../components/labelComponents";
import SinglePlaceholder from "./singlePlaceholder";
import SelectLayoutsModal from "./selectLayoutsModal";
import MultiColumnPlaceholder from "./multiColumnPlaceholder";

interface Comonent{
    type: string,
    label: string
}

interface SelectedPlaceholder{
    type: 'singleColumn' | 'multiColumn' | 'tabs',
    config:{
        tabs?: Array<object>
    }
}

const components = [{
    type: 'label',
    label:"Label"
}]
const Editor = () => {
    const [widget, setWidget] = useState<string[]>([]);
    const [widgetObj, setWidgetObj] = useState<any>({});
    const [open, setOpen] = useState(true);

    const [selectedPlaceholder, setSelectedPlaceholder] = useState<SelectedPlaceholder>()

    const handleOnDragStart = (e: React.DragEvent, widgetType: string)=>{
        e.dataTransfer.setData("widgetType", widgetType);
    }

    const handleWidgetData = (item: any)=>{
        if(typeof item === 'object'){
            const keys = Object.keys(item);
            widgetObj[keys[0]]= [...widgetObj[keys[0]], ...item[keys[0]]]
            setWidgetObj(widgetObj)
        }else{
            setWidget([...widget, item]);
        }
    }


    return (<>
        <SelectLayoutsModal open={open} setOpen={setOpen} handleSelect={(selectedTypeLayout: SelectedPlaceholder)=>{
            setSelectedPlaceholder(selectedTypeLayout)
            setOpen(false);
        }}/>
        <div className="flex h-full">
             <div className="w-[80%] p-4 text-left">
                {selectedPlaceholder?.type === 'singleColumn' && <SinglePlaceholder apiKey={"widgetType"} handleWidgetData={handleWidgetData} widgetList={widget}/>}
                {selectedPlaceholder?.type === 'multiColumn' && <MultiColumnPlaceholder  handleWidgetData={handleWidgetData} widgetList={widgetObj}/>}
             </div>
             <div className="w-[20%] border-l-[1px] border-[#eee] h-full">
                {components.map((compObj)=>{
                    return <>
                       <div className="text-left pl-4 pt-4 cursor-move" draggable onDragStart={(e)=>handleOnDragStart(e, compObj.type)}>
                          {compObj.label}
                       </div>
                    </>
                })}
             </div>
        </div></>
    );
};
export default Editor;