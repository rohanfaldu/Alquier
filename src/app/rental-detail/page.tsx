'use client';
import { useState } from 'react';
import Image from 'next/image';
//import Link from 'next/link';

// interface RentalFormData {
//     pickupOffice: string;
//     pickupOffice1: string;
//     pickupDate: string;
//     pickupTime: string;
//     pickupDate1: string;
//     pickupTime1: string;
//     isDifferentOffice: boolean;
//     dropoffOffice: string;
//     dropoffDate: string;
//     dropoffTime: string;
// }

export default function RentalDetail() {
    const [isProductListData, setIsProductListData] = useState(false);
    const [isStepThird, setIsStepThird] = useState(false);
    const [isStepFourth, setIsStepFourth] = useState(false);
    const [isShowCarDetail, setIsShowCarDetail] = useState(false);
    const [isShowFuelDetail, setIsShowFuelDetail] = useState(false);
    const [isShowAirportDetail, setIsShowAirportDetail] = useState(false);
    const [isShowBrackDownDetail, setIsShowBrackDownDetail] = useState(false);
    const [isShowDiscountDetail, setIsShowDiscountDetail] = useState(false);
    const [count, setCount] = useState(0);
    const [chairsCount, setChairsCount] = useState(0);

    const handleProductlist = () => {
        setIsProductListData(true);
        setIsStepThird(true)
    }

    const handleExtraScreen = () => {
        setIsStepFourth(true);
        setIsStepThird(false);
    }
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
    return (
        <div className="bg-[#F2F3F7]">
            <div className="">
                <div className={`p-4 bg-[#FFFFFF] ${!isStepThird ? 'rounded-b-[20px]' : ''}  shadow-sm pb-[36px]`}>
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
                                    {(isProductListData) ? (<Image src="/icons/Correct.svg" alt="Check" width={12} height={12} />) : '2'}
                                </div>
                                <div className="flex absolute left-1/2 top-full -translate-x-1/2 items-center mt-1">
                                    <span className="font-outfit font-semimedium text-[12px] leading-[16px] text-[#001D65]">Vehículo</span>
                                    <Image src="/icons/edit.svg" alt="Edit" width={16} height={16} className="ml-1" />
                                </div>
                            </div>
                            <div className={`flex-1 flex relative h-[3px] rounded-full ${(isProductListData) ? 'bg-[#003893]' : 'bg-[#D9D9D9]'} mx-[5px] my-0`}></div>

                            {/* Step 3 */}
                            <div className="flex relative flex-col items-center">
                                <div className={`w-[20px] h-[20px] rounded-full border-2 border-[#D9D9D9] flex items-center justify-center font-open-sans font-medium text-[12px] leading-[16px]  ${(isProductListData) ? 'bg-[#003893] text-white' : 'text-[#474953]'}`}>
                                    {(isStepFourth) ? (<Image src="/icons/Correct.svg" alt="Check" width={12} height={12} />) : '3'}
                                </div>
                                {(isProductListData) ? (
                                    <div className="flex absolute left-1/2 top-full -translate-x-1/2 items-center mt-1">
                                        <span className="font-outfit font-semimedium text-[12px] leading-[16px] text-[#001D65]">Extras</span>
                                        <Image src="/icons/edit.svg" alt="Edit" width={16} height={16} className="ml-1" />
                                    </div>
                                ) : (
                                    <span className="flex absolute left-1/2 top-full -translate-x-1/2 items-center mt-1 font-outfit font-semimedium text-[12px] leading-[16px] text-[#474953]">Extras</span>
                                )}
                            </div>
                            <div className={`flex-1 flex relative h-[3px] rounded-full ${(isStepFourth) ? 'bg-[#003893]' : 'bg-[#D9D9D9]'} mx-[5px] my-0`}></div>

                            {/* Step 4 */}
                            <div className="flex relative flex-col items-center relative ">
                                <div className={`w-[20px] h-[20px] rounded-full border-2 border-[#D9D9D9] flex items-center justify-center font-open-sans font-medium text-[12px] leading-[16px]  ${(isStepFourth) ? 'bg-[#003893] text-white' : 'text-[#474953]'}`}>
                                    4
                                </div>
                                <span className="flex absolute left-1/2 top-full -translate-x-1/2 items-center mt-1 font-outfit font-semimedium text-[12px] leading-[16px] text-[#474953]">Pago</span>
                                {/* <div className="w-[20px] h-[20px] rounded-full border-2 border-[#D9D9D9] flex items-center justify-center text-[#787B8B] font-open-sans font-medium text-[12px] leading-[16px] text-[#474953]">
                                    4
                                </div>
                                <span className="flex absolute left-1/2 top-full -translate-x-1/2 items-center mt-1 font-outfit font-semimedium text-[12px] leading-[16px] text-[#474953]">Pago</span> */}
                            </div>
                        </div>
                    </div>
                </div>

                {(!isProductListData) && (
                    <>
                        {/* Content area */}
                        <div className="p-4 mt-[36px]">
                            <div className="bg-white rounded-[20px] p-4 shadow-sm border border-[#E5E7EB]">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h2 className="text-[#001D65] text-[18px] leading-[24px] font-outfit font-bold mb-2">
                                            Ford focus <span className="font-outfit font-normal text-[14px] leading-[20px] text-[#001D65]">o similar GRUPO A</span>
                                        </h2>
                                        <div className="flex gap-2">
                                            <span className="bg-[#00A6C0] text-white px-3 rounded-full text-[14px] font-outfit">
                                                Económico
                                            </span>
                                            <span className="bg-[#F9D7ED] bg-opacity-20 text-[#F118A7] px-3 rounded-full text-[14px] font-outfit">
                                                Cancelación gratuita
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div className="relative mb-4">
                                    <div className="">
                                        <Image
                                            src="/icons/coche.svg"
                                            alt="Car"
                                            width={400}
                                            height={250}
                                            className="w-full object-contain"
                                        />
                                    </div>
                                    <div className="absolute flex bottom-[-7px] right-[-5px] ">
                                        <Image src="/icons/code.svg" alt="code" width={32} height={32} />
                                    </div>
                                </div>

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
                                            <Image src="/icons/new-user.svg" alt="Seats" width={16} height={16} />
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

                                <div className="flex items-center justify-between bg-[#003893] text-white pt-[8px] pb-[8px] rounded-[50px] relative">
                                    <div className="flex items-end gap-2 pl-4 flex-1 justify-center" onClick={() => handleProductlist()}>
                                        <span className="line-through text-[11px] text-[#D8D8D8] font-outfit pb-[2px]">190,00€</span>
                                        <span className="line-through text-[16px] font-medium font-outfit">160,00€</span>
                                    </div>
                                    <div className="absolute bottom-[25px] right-[20px] rounded-full">
                                        <Image src="/icons/discount.svg" alt="Discount" width={30} height={30} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Content area */}
                        <div className="p-4 pt-[0px]">
                            <div className="bg-white rounded-[20px] p-6 shadow-sm border border-[#E5E7EB]">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h2 className="text-[#001D65] text-[18px] leading-[24px] font-outfit font-bold mb-2">
                                            KIA PICANTO <span className="font-outfit font-normal text-[14px] leading-[20px] text-[#001D65]">o similar GRUPO A</span>
                                        </h2>
                                        <div className="flex gap-2">
                                            <span className="bg-[#00A6C0] text-white px-3 rounded-full text-[14px] font-outfit">
                                                Económico
                                            </span>
                                            <span className="bg-[#F9D7ED] bg-opacity-20 text-[#F118A7] px-3 rounded-full text-[14px] font-outfit">
                                                Cancelación gratuita
                                            </span>
                                        </div>
                                    </div>

                                </div>

                                <div className="flex gap-6 mb-4">
                                    <div className="flex-1 relative">
                                        <Image
                                            src="/icons/coche-1.svg"
                                            alt="Car"
                                            width={92}
                                            height={154}
                                            className="w-full"
                                        />
                                        {/* <div className="absolute bottom-[28px] right-[0px]">
                                            <Image src="/icons/code-1.svg" alt="code" width={32} height={32} />
                                        </div> */}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col rounded-lg">
                                            <div className="flex items-center gap-[4px] pb-[8px]">
                                                <Image src="/icons/Gearbox.svg" alt="Automatic" width={14} height={14} />
                                                <span className="font-outfit font-normal text-[14px] leading-[20px] text-[#001D65]">Automático</span>
                                            </div>
                                            <div className="flex items-center gap-[4px] pb-[8px]">
                                                <Image src="/icons/gray-door.svg" alt="Doors" width={14} height={14} />
                                                <span className="font-outfit font-normal text-[14px] leading-[20px] text-[#001D65]">4 puertas</span>
                                            </div>
                                            <div className="flex items-center gap-[4px] pb-[8px]">
                                                <Image src="/icons/gray-users.svg" alt="Seats" width={14} height={14} />
                                                <span className="font-outfit font-normal text-[14px] leading-[20px] text-[#001D65]">5 plazas</span>
                                            </div>
                                            <div className="flex items-center gap-[4px]">
                                                <Image src="/icons/gray-bag.svg" alt="Luggage" width={14} height={14} />
                                                <span className="font-outfit font-normal text-[14px] leading-[20px] text-[#001D65]">2 Maletas</span>
                                            </div>
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

                                <div className="flex items-center justify-between bg-[#003893] text-white pt-[8px] pb-[8px] rounded-[50px] relative">
                                    <div className="flex items-end gap-2 pl-4 flex-1 justify-center">
                                        <span className="line-through text-[11px] text-[#D8D8D8] font-outfit pb-[2px]">190,00€</span>
                                        <span className="line-through text-[16px] font-medium font-outfit">160,00€</span>
                                    </div>
                                    <div className="absolute bottom-[25px] right-[20px] rounded-full">
                                        <Image src="/icons/discount.svg" alt="Discount" width={30} height={30} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {isStepThird && (
                    <div>
                        <div className="">
                            <div className="bg-white shadow-sm">
                                <div className="flex flex-col ">
                                    <div className="flex items-center gap-4 pl-[20px] pr-[20px]">
                                        <Image
                                            src="/icons/coche-third.svg"
                                            alt="Car"
                                            width={136}
                                            height={90}
                                            className="object-contain"
                                        />
                                        <div className="flex flex-col">
                                            <span className="font-outfit font-semibold text-[18px] leading-[24px] text-[#003893]">&lt;Modelo&gt;</span>
                                            <span className="font-outfit font-normal text-[12px] leading-[16px] text-[#003893]">o similar GRUPO A</span>
                                            <div className="flex font-outfit font-medium text-[14px] leading-[20px] text-[#003893]">
                                                Económico
                                                <Image
                                                    src={"/icons/line.svg"}
                                                    alt="Line"
                                                    width={2}
                                                    height={20}
                                                    className="mx-2"
                                                />
                                                <span className="font-outfit font-bold text-[16px] leading-[20px] text-[#003893]">160,00€</span></div>

                                        </div>
                                    </div>

                                    <div className="bg-[#003893] pt-[20px] pb-[20px] pl-[13px] pr-[13px] ">
                                        <h3 className="text-white font-outfit text-[20px] leading-[24px] mb-[14px]">¿Necesitas algo más?</h3>
                                        <p className="text-white font-outfit text-[14px] leading-[20px]">
                                            Recuerda que el paquete que has elegido ya incluye un segundo conductor gratis.
                                        </p>
                                    </div>

                                    <div className="border border-[#E5E7EB] pl-[24px] pb-[19px] pt-[24px] pr-[24px]">
                                        <div className="">
                                            <div className="flex justify-between items-start mb-4">
                                                <h3 className="font-outfit font-semibold text-[18px] leading-[24px] text-[#003893]">Vas a conducir por Portugal, Francia o Andorra?</h3>
                                                <span className="font-outfit font-medium text-[24px] leading-[32px] text-[#003893] mt-1">70€</span>
                                            </div>
                                            <p className="font-outfit font-normal text-[14px] leading-[18px] text-[#2F3037]">
                                                Si vas a viajar a un país diferente con tu coche de alquiler necesitarás contratar nuestra cobertura en exterior.
                                            </p>
                                        </div>
                                        <button className="mt-4 w-full py-2 px-4 border border-[#003893] bg-[#F5F7F9] rounded-[50px] text-[#003893] font-outfit font-bold text-[14px] leading-[18px] ">
                                            Añadir
                                        </button>
                                    </div>

                                    <div className="border border-[#E5E7EB] pl-[24px] pb-[19px] pt-[24px] pr-[24px]">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="flex items-start justify-center align-center gap-2 mb-4">
                                                    <h3 className="font-outfit font-semibold text-[18px] leading-[24px] text-[#003893]">Conductor adicional</h3>
                                                    <div className="ml-auto">
                                                        <span className="text-[#F118A7] font-outfit font-medium text-[20px] leading-[24px] pr-[7px]">¡Gratis!</span>
                                                        <span className="line-through text-[#003893] font-medium font-outfit text-[24px] leading-[32px]">55€</span>
                                                    </div>
                                                </div>
                                                <p className="font-outfit text-[14px] leading-[18px] text-[#2F3037] mt-1 tracking-tight">
                                                    Ya tienes un segundo conductor incluido, añade más si los necesitas
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-4 bg-[#F5F7F9] rounded-[30px] p-3">
                                            <button
                                                className="w-[28px] h-[28px] rounded-full bg-[#F2F3F7] flex items-center justify-center text-[#003893] bg-[#FFFFFF]"
                                                onClick={() => setCount(count > 0 ? count - 1 : 0)}
                                            >
                                                <span className="text-xl font-medium">-</span>
                                            </button>
                                            <span className="w-16 text-center font-outfit font-bold text-[14px] leading-[18px] text-[#0C4198]">
                                                {count}
                                            </span>
                                            <button
                                                className="w-[28px] h-[28px] rounded-full bg-[#F2F3F7] flex items-center justify-center text-[#003893] bg-[#FFFFFF]"
                                                onClick={() => setCount(count + 1)}
                                            >
                                                <span className="text-xl font-medium">+</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="border border-[#E5E7EB] pl-[24px] pb-[19px] pt-[24px] pr-[24px]">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="flex items-start justify-center align-center gap-2 mb-4">
                                                    <h3 className="font-outfit font-semibold text-[18px] leading-[24px] text-[#003893]">Sillas para bebés y niños</h3>
                                                    <div className="ml-auto">
                                                        {/* <span className="text-[#F118A7] font-outfit font-medium text-[20px] leading-[24px] pr-[7px]">¡Gratis!</span> */}
                                                        <span className="line-through text-[#003893] font-medium font-outfit text-[24px] leading-[32px]">75€</span>
                                                    </div>
                                                </div>
                                                <p className="font-outfit text-[14px] leading-[18px] text-[#2F3037] mt-1 tracking-tight">
                                                    La ley obliga a cualquier niño menor de 12 años o de menos de 135 cm de altura a llevar una silla correspondiente a su edad y/o peso homologada en el vehículo.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between mt-4 bg-[#F5F7F9] rounded-[30px] p-3">
                                            <button
                                                className="w-[28px] h-[28px] rounded-full bg-[#F2F3F7] flex items-center justify-center text-[#003893] bg-[#FFFFFF]"
                                                onClick={() => setChairsCount(chairsCount > 0 ? chairsCount - 1 : 0)}
                                            >
                                                <span className="text-xl font-medium">-</span>
                                            </button>
                                            <span className="w-16 text-center font-outfit font-bold text-[14px] leading-[18px] text-[#0C4198]">
                                                {chairsCount}
                                            </span>
                                            <button
                                                className="w-[28px] h-[28px] rounded-full bg-[#F2F3F7] flex items-center justify-center text-[#003893] bg-[#FFFFFF]"
                                                onClick={() => setChairsCount(chairsCount + 1)}
                                            >
                                                <span className="text-xl font-medium">+</span>
                                            </button>
                                        </div>

                                    </div>
                                    <div className="border border-[#E5E7EB] pl-[24px] pb-[19px] pt-[24px] pr-[24px]">
                                        <div className="flex-1 justify-between items-start">
                                            <div>
                                                <div className="flex items-start justify-center align-center gap-2 mb-4">
                                                    <h3 className="font-outfit font-semibold text-[18px] leading-[24px] text-[#003893]">Cadenas para la nieve</h3>
                                                    <div className="ml-auto">
                                                        <span className="line-through text-[#003893] font-medium font-outfit text-[24px] leading-[32px]">40€</span>
                                                    </div>
                                                </div>
                                                <p className="font-outfit text-[14px] leading-[18px] text-[#2F3037] mt-1 tracking-tight">
                                                    Evita problemas de adherencia en invierno añadiendo unas cadenas para los neumáticos.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <button className="mt-4 w-full py-[18px] px-4 bg-[#F5F7F9] rounded-[50px] text-[#003893] font-outfit font-bold text-[14px] leading-[18px] ">
                                                Añadir
                                            </button>
                                        </div>
                                    </div>
                                    <div className="pl-[24px] pb-[19px] pt-[24px] pr-[24px]">
                                        <button className="w-full py-3 px-4 bg-[#003893] rounded-[50px] text-[#FFFFFF] font-outfit font-medium text-[16px] leading-[20px] " onClick={() => handleExtraScreen()} >
                                            Continuar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {(isStepFourth) && (
                    <>
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
                                                <button className="flex items-center gap-2 text-[#003893] font-outfit text-[14px]" onClick={() => handleDown()}>
                                                    Ver detalle
                                                    <Image src="/icons/dowon.svg" alt="down" width={20} height={20}
                                                        className={`ml-1 ${!isShowCarDetail ? `rotate-180` : ``}`} />
                                                </button>
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
                                                        <Image src="/icons/new-user.svg" alt="Seats" width={16} height={16} />
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
                                            <div className="flex items-center gap-2 mt-2 text-[#2F3037] font-outfit text-[14px]" onClick={() => handleAirport()}>
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
                                            <div className="flex items-center gap-2 mt-2 text-[#2F3037] font-outfit text-[14px]" onClick={() => handlefuelport()}>
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
                                        <button className="flex items-center gap-2 mt-2 text-[#003893] font-outfit text-[14px]" onClick={() => handleBrackDown()}>
                                            Desglose del precio
                                            <Image src="/icons/dowon.svg" alt="up" width={20} height={20} className={` ${!isShowBrackDownDetail ? `rotate-180` : ``}`} />
                                        </button>
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
                        <div className="pl-[10px] pb-[19px] pr-[10px]"><button className="w-full py-3 px-4 bg-[#003893] rounded-[50px] text-[#FFFFFF] font-outfit font-medium text-[16px] leading-[20px] ">Confirmar y pagar</button></div>
                        <div> code here </div>
                    </div>
                       {(isShowDiscountDetail) && (
                        <div className={` bg-white ${(isShowDiscountDetail) ? 'show' : 'hide'}`}>
                            <div className="bg-white rounded-[12px] p-4 w-full shadow-lg">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-[#003893] font-outfit text-[16px] font-medium">
                                        ¿Tienes algún código descuento?
                                    </h3>
                                    <button className="text-[#474953]">
                                        <Image src="/icons/close.svg" alt="Close" width={24} height={24} />
                                    </button>
                                </div>

                                {/* Input Label */}
                                <p className="text-[#474953] font-outfit text-[14px] mb-2">
                                    Introduce tu código de descuento
                                </p>

                                {/* Input Field */}
                                <div className="mb-2">
                                    <input 
                                        type="text" 
                                        placeholder="Introduce aquí tu descuento"
                                        className="w-full border border-[#E11D48] rounded-lg px-4 py-2 font-outfit text-[14px] placeholder-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-[#E11D48] focus:border-transparent"
                                    />
                                </div>

                                {/* Error Message */}
                                <p className="text-[#E11D48] font-outfit text-[12px] mb-4">
                                    El código introducido ya no es válido
                                </p>

                                {/* Continue Button */}
                                <button className="w-full bg-[#003893] text-white font-outfit text-[14px] py-3 rounded-full hover:bg-[#002d7a] transition-colors">
                                    Continuar
                                </button>
                            </div>
                        </div>
                        )}             
                    </>
                    // ... existing code ...
                )}
            </div>
        </div>
    );
}