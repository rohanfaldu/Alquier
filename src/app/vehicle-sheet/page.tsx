'use client';
import { useState } from 'react';
import Image from 'next/image';
//import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function VehicleSheet() {
    const [isShowCarDetail, setIsShowCarDetail] = useState(false);
    const [isShowFuelDetail, setIsShowFuelDetail] = useState(false);
    const [isShowAirportDetail, setIsShowAirportDetail] = useState(false);
    const [isShowBrackDownDetail, setIsShowBrackDownDetail] = useState(false);
    const [isShowDiscountDetail, setIsShowDiscountDetail] = useState(false);

    const router = useRouter();

    const handleDown = () => {
        const updateStatus = (isShowCarDetail) ? false : true;
        setIsShowCarDetail(updateStatus)
    }
    const handleAirport = () => {
        const updateStatus = (isShowAirportDetail) ? false : true;
        setIsShowAirportDetail(updateStatus)
    }
    const handlefuelport = () => {
        const updateStatus = (isShowFuelDetail) ? false : true;
        setIsShowFuelDetail(updateStatus)
    }
    const handleBrackDown = () => {
        const updateStatus = (isShowBrackDownDetail) ? false : true;
        setIsShowBrackDownDetail(updateStatus)
    }
    const handleDiscoundCode = () => {
        console.log(123123)
        const updateStatus = (isShowDiscountDetail) ? false : true;
        setIsShowDiscountDetail(updateStatus)
    }
    const handleClose = () => {
        setIsShowDiscountDetail(false)
    }

    const handleConfirm = () => {
        router.push('/review');
    }
    return (
        <>
            <div>
                <div className="flex items-center relative w-full pt-[28px] pb-[28px] pr-[16px] pl-[16px] bg-[#FFFFFF]">
                    <div onClick={(e) => {
                        e.preventDefault();
                        router.back();
                    }} className="left-0">
                        <Image
                            src="/images/back-img.svg"
                            alt="Back"
                            className=""
                            width={24}
                            height={24}
                        />
                    </div>
                    <h1 className="font-outfit font-medium text-[20px] leading-[24px] text-[#004FAC] flex-1 text-center">Alquiler</h1>
                </div>
                {(isShowDiscountDetail) && ( <div className=" max-w-[768px] bg-[#0E1330] opacity-50 fixed w-[100%] h-[100%] z-2 top-0"></div>)}
                <div className="bg-[#EAF6FC]">
                    <div className="">
                        <div className={`p-4 bg-[#FFFFFF] rounded-b-[20px]  shadow-sm pb-[36px]`}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center flex-1">
                                    {/* Step 1 */}
                                    <div className="flex relative flex-col items-center">
                                        <div className="w-[20px] h-[20px] rounded-full bg-[#003893] flex items-center justify-center">
                                            <Image src="/icons/Correct.svg" alt="Check" width={12} height={12} />
                                        </div>
                                        <div className="flex absolute left-1/2 top-full -translate-x-1/2 items-center mt-1">
                                            <span className="font-outfit font-semimedium text-[12px] leading-[16px] text-[#001D65]">Fechas</span>
                                            <Image src="/icons/edit.svg" alt="Edit" width={16} height={16} className="ml-1" />
                                        </div>
                                    </div>
                                    <div className="flex-1 flex relative h-[3px] rounded-full bg-[#003893] mx-[5px] my-0 "></div>

                                    {/* Step 2 - Current */}
                                    {/* <div className="flex-2 flex relative -top-[10px] h-[2px] bg-[#003893] rounded-full"></div> */}
                                    <div className="relative flex flex-col items-center">
                                        <div className="w-[20px] h-[20px] rounded-full bg-[#003893] flex items-center justify-center text-white font-open-sans font-medium text-[12px] leading-[16px] text-[#474953]">
                                            <Image src="/icons/Correct.svg" alt="Check" width={12} height={12} />                                        </div>
                                        <div className="flex absolute left-1/2 top-full -translate-x-1/2 items-center mt-1">
                                            <span className="font-outfit font-semimedium text-[12px] leading-[16px] text-[#001D65]">Vehículo</span>
                                            <Image src="/icons/edit.svg" alt="Edit" width={16} height={16} className="ml-1" />
                                        </div>
                                    </div>
                                    <div className={`flex-1 flex relative h-[3px] rounded-full bg-[#003893] mx-[5px] my-0`}></div>

                                    {/* Step 3 */}
                                    <div className="flex relative flex-col items-center">
                                        <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center font-open-sans font-medium text-[12px] leading-[16px]  bg-[#003893] text-white`}>
                                            <Image src="/icons/Correct.svg" alt="Check" width={12} height={12} />     
                                        </div>
                                        <div className="flex absolute left-1/2 top-full -translate-x-1/2 items-center mt-1">
                                                <span className="font-outfit font-semimedium text-[12px] leading-[16px] text-[#001D65]">Extras</span>
                                                <Image src="/icons/edit.svg" alt="Edit" width={16} height={16} className="ml-1" />
                                            </div>
                                        </div>
                                    <div className={`flex-1 flex relative h-[3px] rounded-full bg-[#003893] mx-[5px] my-0`}></div>

                                    {/* Step 4 */}
                                    <div className="flex relative flex-col items-center relative ">
                                        <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center font-open-sans font-medium text-[12px] leading-[16px]  bg-[#003893] text-white`}>
                                            4
                                        </div>
                                        <span className="flex absolute left-1/2 top-full -translate-x-1/2 items-center mt-1 font-outfit font-semimedium text-[12px] leading-[16px] text-[#001D65]">Pago</span>
                                        {/* <div className="w-[20px] h-[20px] rounded-full border-2 border-[#D9D9D9] flex items-center justify-center text-[#787B8B] font-open-sans font-medium text-[12px] leading-[16px] text-[#474953]">
                                    4
                                </div>
                                <span className="flex absolute left-1/2 top-full -translate-x-1/2 items-center mt-1 font-outfit font-semimedium text-[12px] leading-[16px] text-[#474953]">Pago</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div>
                                <div className="p-4 mt-[36px]">
                                    <div className="">
                                        <div className="bg-white rounded-[20px] p-4 space-y-4 shadow-sm border border-[#E5E7EB]">
                                            {/* Car Summary */}
                                            <div className="flex items-center justify-between mb-[8px]">
                                                <div className="flex items-center gap-2">
                                                    <span className="bg-[#00A6C0] text-white px-3 rounded-full text-[14px] font-outfit">
                                                        Económico
                                                    </span>
                                                    <span className="bg-[#F9D7ED] bg-opacity-20 text-[#F118A7] px-3 rounded-full text-[14px] font-outfit">
                                                        Cancelación gratuita
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Car Details */}
                                            <div className="flex items-center gap-[10px] mb-[8px]">
                                                <Image
                                                    src="/icons/coche-fourth.svg"
                                                    alt="Car"
                                                    width={144}
                                                    height={75}
                                                    className="object-contain"
                                                />
                                                <div className="flex flex-col">
                                                    <span className="font-outfit font-semibold text-[18px] leading-[24px] text-[#003893]">KIA PICANTO</span>
                                                    <span className="font-outfit font-normal text-[12px] leading-[16px] text-[#003893] mb-[8px]">o similar GRUPO A</span>
                                                    <div className="flex font-outfit font-medium text-[14px] leading-[20px] text-[#003893]">
                                                        <div className="flex items-center gap-2 text-[#003893] font-outfit text-[14px] justify-between" onClick={() => handleDown()}>
                                                            Ver detalle
                                                            <Image src="/icons/dowon.svg" alt="down" width={20} height={20}
                                                                className={`ml-1 ${!isShowCarDetail ? `rotate-180` : ``}`} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {(isShowCarDetail) && (
                                                <div className={` ${(isShowCarDetail) ? 'show' : 'hide'}`}>
                                                    <div className="bg-[#F8FAFF] p-2 rounded-lg mb-4">
                                                        <div className="flex justify-between items-center gap-2">
                                                            <div className="flex items-center gap-1">
                                                                <Image src="/icons/automatic.svg" alt="Automatic" width={16} height={16} />
                                                                <span className="font-outfit font-normal text-[14px] leading-[20px] text-[#001D65] ">Automático</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <Image src="/icons/gas.svg" alt="Gas" width={16} height={16} />
                                                                <span className="font-outfit font-normal text-[14px] leading-[20px] text-[#001D65]">Gasolina</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <Image src="/icons/door.svg" alt="Doors" width={16} height={16} />
                                                                <span className="font-outfit font-normal text-[14px] leading-[20px] text-[#001D65]">4</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <Image src="/icons/new-user.png" alt="Seats" width={16} height={16} />
                                                                <span className="font-outfit font-normal text-[14px] leading-[20px] text-[#001D65]">5</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <Image src="/icons/luggage.svg" alt="Luggage" width={16} height={16} />
                                                                <span className="font-outfit font-normal text-[14px] leading-[20px] text-[#001D65]">2</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <ul className="space-y-3 mb-4">
                                                        <li className="flex items-center gap-2 text-[#001D65] font-outfit mb-0">
                                                            <Image src="/icons/tick-square.svg" alt="Check" width={8} height={8} className='m-1' />
                                                            Cobertura total sin franquicia
                                                        </li>
                                                        <li className="flex items-center gap-2 text-[#001D65] font-outfit mb-0">
                                                            <Image src="/icons/tick-square.svg" alt="Check" width={8} height={8} className='m-1' />
                                                            Kilometraje ilimitado
                                                        </li>
                                                        <li className="flex items-center gap-2 text-[#001D65] font-outfit mb-0">
                                                            <Image src="/icons/tick-square.svg" alt="Check" width={8} height={8} className='m-1' />
                                                            Recogida sin esperas desde tu app Voltio
                                                        </li>
                                                        <li className="flex items-center gap-2 text-[#001D65] font-outfit mb-0">
                                                            <Image src="/icons/tick-square.svg" alt="Check" width={8} height={8} className='m-1' />
                                                            Conductor adicional
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        <div className="bg-white rounded-[20px] p-4 space-y-4 mt-[24px] shadow-sm border border-[#E5E7EB]">
                                            {/* Location Info */}
                                            <div className="">
                                                <div className="flex items-center justify-between border-b border-[#D0D2D7] pb-[16px]">
                                                    <div>
                                                        <h3 className="text-[#003893] font-outfit text-[16px] font-medium">
                                                            Aeropuerto Madrid - Barajas
                                                        </h3>
                                                        <p className="text-[#5E616E] font-outfit text-[14px]">
                                                            Desde 17 ago 18:00 hasta 17 ago 18:00
                                                        </p>
                                                    </div>
                                                    <button className='pl-[10px]'>
                                                        <Image src="/icons/outline-info.svg" alt="info" width={20} height={20} />
                                                    </button>
                                                </div>
                                                <div className="">
                                                    <div className="flex items-center gap-2 mt-2 text-[#2F3037] font-outfit text-[14px] justify-between" onClick={() => handleAirport()}>
                                                        Información de recogida y devolución
                                                        <Image src="/icons/black-down.svg" alt="down" width={20} height={20} className={` ${!isShowAirportDetail ? `rotate-180` : ``}`} />
                                                    </div>
                                                </div>
                                                {(isShowAirportDetail) && (
                                                    <div className={` bg-white ${(isShowAirportDetail) ? 'show' : 'hide'}`}>
                                                        {/* Pickup Location Section */}
                                                        <div className="pt-[16px]">
                                                            <h2 className="text-[#0E1330] text-[14px] leading-[20px] font-outfit font-bold mb-0">
                                                                Recogida - Aeropuerto Madrid - Barajas
                                                            </h2>
                                                            <p className="text-[14px] leading-[20px] font-normal font-outfit text-[#0E1330] mb-4">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis posuere tortor.
                                                            </p>
                                                        </div>

                                                        {/* Return Location Section */}
                                                        <div className="pt-[10px]">
                                                            <h2 className="text-[#0E1330] text-[14px] leading-[20px] font-outfit font-bold mb-0">
                                                                ¿Dónde devuelvo mi vehículo?
                                                            </h2>
                                                            <p className="text-[14px] leading-[20px] font-normal font-outfit text-[#0E1330]  mb-4">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis posuere tortor.
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-[20px] p-4 space-y-4 mt-[24px] shadow-sm border border-[#E5E7EB]">
                                            {/* Location Info */}
                                            <div className="">
                                                <div className="flex items-center justify-between border-b border-[#D0D2D7] pb-[16px]">
                                                    <div>
                                                        <h3 className="text-[#003893] font-outfit text-[16px] font-medium">
                                                            Combustible lleno-lleno
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <div className="flex items-center gap-2 mt-2 text-[#2F3037] font-outfit text-[14px] justify-between" onClick={() => handlefuelport()}>
                                                        Información de recogida y devolución
                                                        <Image src="/icons/black-down.svg" alt="down" width={20} height={20} className={` ${!isShowFuelDetail ? `rotate-180` : ``}`} />
                                                    </div>
                                                </div>
                                                {(isShowFuelDetail) && (
                                                    <div className={` bg-white ${(isShowFuelDetail) ? 'show' : 'hide'}`}>
                                                        {/* Pickup Location Section */}
                                                        <div className="pt-[16px]">
                                                            <h2 className="text-[#0E1330] text-[14px] leading-[20px] font-outfit font-bold mb-0">
                                                                Recogida - Aeropuerto Madrid - Barajas
                                                            </h2>
                                                            <p className="text-[14px] leading-[20px] font-normal font-outfit text-[#0E1330] mb-4">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis posuere tortor.
                                                            </p>
                                                        </div>

                                                        {/* Return Location Section */}
                                                        <div className="pt-[10px]">
                                                            <h2 className="text-[#0E1330] text-[14px] leading-[20px] font-outfit font-bold mb-0">
                                                                ¿Dónde devuelvo mi vehículo?
                                                            </h2>
                                                            <p className="text-[14px] leading-[20px] font-normal font-outfit text-[#0E1330]  mb-4">
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis posuere tortor.
                                                            </p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                        </div>

                                        <div className="bg-white rounded-[20px] p-4 space-y-4 mt-[24px] shadow-sm border border-[#E5E7EB]">
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="text-[#474953] font-outfit text-[14px]">Total</p>
                                                        <p className="text-[#474953] font-outfit text-[12px]">(IVA incluido)</p>
                                                    </div>
                                                    <span className="text-[#003893] font-outfit text-[18px] font-bold">
                                                        160,00 €
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 mt-2 text-[#003893] font-outfit text-[14px] justify-between" onClick={() => handleBrackDown()}>
                                                    Desglose del precio
                                                    <Image src="/icons/dowon.svg" alt="up" width={20} height={20} className={` ${!isShowBrackDownDetail ? `rotate-180` : ``}`} />
                                                </div>
                                            </div>

                                            {/* Additional Items */}
                                            {(isShowBrackDownDetail) && (
                                                <div className={` p-0 m-0 ${(isShowBrackDownDetail) ? 'show' : 'hide'}`}>
                                                    <div className="flex items-center justify-between border-t border-[#DBDCE2] p-2">
                                                        <span className="text-[#474953] font-outfit text-[14px]">1 conductor adicional</span>
                                                        <span className="text-[#003893] font-outfit text-[14px] font-bold">GRATIS</span>
                                                    </div>
                                                    <div className="flex items-center justify-between border-t border-[#DBDCE2] p-2">
                                                        <span className="text-[#474953] font-outfit text-[14px]">Centauro premium</span>
                                                        <span className="text-[#003893] font-outfit text-[14px] font-bold">GRATIS</span>
                                                    </div>
                                                </div>
                                            )}
                                            {/* Discount Code */}
                                            <div className="flex items-center justify-center">
                                                <div className="flex items-center gap-2 text-[#003893] font-outfit text-[14px] py-2 justify-center" onClick={() => handleDiscoundCode()}>
                                                    <Image src="/icons/gift.svg" alt="gift" width={20} height={20} />
                                                    ¿Tienes un código de descuento?
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pl-[10px] pb-[19px] pr-[10px]"><div className="w-full py-3 px-4 bg-[#003893] rounded-[50px] text-[#FFFFFF] font-outfit font-medium text-[16px] leading-[20px] flex justify-center" onClick={() => handleConfirm()}>Confirmar y pagar</div></div>
                            </div>

                           
                    </div>
                </div>
                {(isShowDiscountDetail) && (
                    <div className={` max-w-[768px] bg-white ${(isShowDiscountDetail) ? 'show z-2 fixed w-[100%] bottom-0 rounded-t-[24px]' : 'hide'}`}>
                        <div className="bg-white rounded-[12px] p-4 w-full shadow-lg">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-[#003893] font-outfit text-[16px] font-medium">
                                    ¿Tienes algún código descuento?
                                </h3>
                                <button className="text-[#474953]" onClick={() => handleClose()}>
                                    <Image src="/icons/close.svg" alt="Close" width={24} height={24} />
                                </button>
                            </div>

                            {/* Input Label */}
                            <p className="text-[#474953] font-outfit text-[14px] mb-2">
                                Introduce tu código de descuento
                            </p>

                            {/* Input Field */}
                            <div className="mb-6">
                                <input
                                    type="text"
                                    placeholder="Introduce aquí tu descuento"
                                    className="w-full border border-[#787B8B] rounded-lg px-4 py-2 font-outfit text-[14px] placeholder-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-[#787B8B] focus:border-transparent"
                                />
                                {/* {className="w-full border border-[#E01010] rounded-lg px-4 py-2 font-outfit text-[14px] placeholder-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-[#E01010] focus:border-transparent"} */}
                            </div>

                            {/* Error Message */}
                            {/* <p className="text-[#E01010] font-outfit text-[12px] mb-4">
                        El código introducido ya no es válido
                    </p> */}

                            {/* Continue Button */}
                            <button className="w-full bg-[#003893] text-white font-outfit text-[14px] py-3 rounded-full hover:bg-[#002d7a] transition-colors mb-[40px]">
                                Continuar
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}