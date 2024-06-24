import { useState } from "react";

interface Props{
    handleSelect: Function,
    open: boolean,
    setOpen: Function
}

const SelectLayoutsModal = (props: Props) => {
    const {handleSelect, open, setOpen} = props;
    const [showInput, setShowInput] = useState(false);
    const [tabCount, setTabCount] = useState(0);
    return (
        <>{open && <div className="modal-container">
          <dialog open className="absolute top-[20vh] bg-white w-[50vw]">
                <p className="text-2xl">Select Layouts</p> 
                {!showInput && <div className="flex justify-around p-8">
                    <div className="border w-[150px] h-[150px] flex justify-center items-center cursor-pointer" onClick={()=>handleSelect({
                        type: 'singleColumn',
                        config:{}
                    })}>
                        Single Column
                    </div>
                    <div className="border w-[150px] h-[150px] flex justify-center items-center cursor-pointer" onClick={()=>handleSelect({
                        type: 'multiColumn',
                        config:{}
                    })}>
                        Multi Coulumn
                    </div>
                    <div className="border w-[150px] h-[150px] flex justify-center items-center cursor-pointer"  onClick={()=>setShowInput(true)}>
                        Tab Based Layout
                    </div>
                </div>}
                {showInput && <div className="p-2">
                    Number of Tabs
                  <div><input type="number" onChange={(e: any)=>setTabCount(e.target.value)} className="border w-[300px] p-2 m-4"/></div>
                  <button className="bg-[gray] w-[150px] h-[40px] text-white" onClick={()=>handleSelect({
                        type: 'tabs',
                        config:{
                           tabs: tabCount
                        }
                    })}>Select</button>
                </div> || ''}
          </dialog>
          </div>}
        </>
    );
};
export default SelectLayoutsModal;