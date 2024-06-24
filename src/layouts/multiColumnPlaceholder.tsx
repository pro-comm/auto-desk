import { useState } from "react";
import SinglePlaceholder from "./singlePlaceholder";
interface Props{
    handleWidgetData: Function,
    widgetList: any
}

const MultiColumnPlaceholder = (props: Props) => {
    const {handleWidgetData, widgetList} = props;
    return (
        <div className="flex w-full">
            <div className="w-[48%] pr-2"><SinglePlaceholder apiKey={"widgetType"} column={'column1'} handleWidgetData={handleWidgetData} widgetList={widgetList['column1']}/></div>
            <div className="w-[50%]"><SinglePlaceholder apiKey={"widgetType"} column={'column2'} handleWidgetData={handleWidgetData} widgetList={widgetList['column2']}/></div>
        </div>
    );
};
export default MultiColumnPlaceholder;