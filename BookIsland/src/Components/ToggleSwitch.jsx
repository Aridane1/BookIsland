import { useState } from "react";

export const ToggleSwitch = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div>
            <input
                className="h-[26px] w-[72px] pt-[-2px] appearance-none rounded-full border-[3px] border-dark bg-secondary 
                before:pointer-events-none before:absolute before:w-3.5 before:content-[''] 
                after:absolute after:z-[2] after:h-6 after:w-6 after:rounded-full after:border-[3px] after:border-dark after:transition-[transform_0.2s] after:content-[''] after:left-[86px] after:mt-[-1.5px] // Justeret margin-top
                checked:after:absolute checked:after:z-[2] checked:after:ml-[1.0525rem] checked:after:h-6 checked:after:w-6 checked:after:rounded-full checked:after:border-[3px] checked:after:bg-primary after:bg-primary checked:after:border-dark checked:after:transition-[transform_0.2s] checked:after:content-[''] checked:after:left-[22px]
                hover:cursor-pointer focus:outline-none focus:ring-0
                focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-6 focus:after:w-6 focus:after:rounded-full focus:after:content-[''] 
                checked:focus:before:ml-[5px] checked:focus:before:scale-100"
                type="checkbox"
                role="switch"
                id="flexSwitchChecked"
                defaultChecked={isChecked}
                onChange={handleToggle} />
           <span className={`relative top-4 -left-20 text-[11px] text-dark font-bold ${isChecked ? 'text-dark' : 'text-primary'}`}>swap</span>
           <span className={`relative top-4 -left-14 text-[11px] text-dark font-bold ${isChecked ? 'text-primary' : 'text-dark'}`}>donate</span>
        </div>
    );
}
