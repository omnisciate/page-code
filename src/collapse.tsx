import { useState } from 'react';
import { Collapse } from 'react-collapse';
const collapse = ({quest,anwser,css}:{quest:string,anwser:string,css:string}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <div   className={css}>
                <div onClick={handleToggle} className="flex flex-row justify-between items-start relative z-20 cursor-pointer">
                    <h1 className="font-normal text-[22px]  lg:text-[32px] w-10/12 lg:max-w-full" >{quest}</h1>
                    
                    <div
                        className={isOpen ?"grid place-items-center w-[30.5px] h-[30.5px] aspect-square border-[1px] border-white rounded-full lg:w-[62px] lg:h-[62px] group lg:hover:bg-white duration-300 transition-all bg-white":"grid place-items-center w-[30.5px] h-[30.5px] aspect-square border-[1px] border-white rounded-full lg:w-[62px] lg:h-[62px] group lg:hover:bg-white duration-300 transition-all false"}>
                        <div className="flex flex-col relative">
                            <div
                                className="bg-white w-[2px] h-[12px] lg:h-[25px] absolute top-0 left-0 rotate-90 lg:group-hover:bg-[#010310] transition-all  duration-300 ">
                            </div>
                            <div
                                className={isOpen ? "bg-white w-[2px] h-[12px] lg:h-[25px] lg:bg-[#010310] transition-all duration-300  rotate-90 bg-black" : "bg-white w-[2px] h-[12px] lg:h-[25px] lg:group-hover:bg-[#010310] transition-all duration-300  scale-y-100"}>
                            </div>
                        </div>
                    </div>
                    {/* {
                        isOpen &&
                        <div className="grid place-items-center w-[30.5px] h-[30.5px] aspect-square border-[1px] border-white rounded-full lg:w-[62px] lg:h-[62px] group lg:bg-white duration-300 transition-all bg-white">
                            <div className="flex flex-col relative">
                                <div className="bg-white w-[2px] h-[12px] lg:h-[25px] absolute top-0 left-0 rotate-90 lg:bg-[#010310] transition-all  duration-300 "></div>
                                <div className="bg-white w-[2px] h-[12px] lg:h-[25px] lg:bg-[#010310] transition-all duration-300  rotate-90 bg-black"></div></div></div>
                            
                    } */}
                    
                </div>
                    <Collapse isOpened={isOpen}>
                        <p
                            className="text-[14px] pt-[10px] text-[#8492A6] font-normal lg:text-[18px] lg:min-w-fit lg:w-full lg:max-w-[658px] transition-all duration-300">
                        {anwser}
                        </p>
                    </Collapse>
                <div className="w-full h-[1px] bg-gradient-to-r from-white mt-[15px] lg:mt-[62px]"></div>
            </div>
        </>
    )
}
export default collapse