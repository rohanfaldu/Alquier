'use client';
import Image from 'next/image';
//import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RentalDetail() {
    const router = useRouter();
    const handleProductlist = () => {
        router.push('/extra-screen');
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
                                            2
                                        </div>
                                        <div className="flex absolute left-1/2 top-full -translate-x-1/2 items-center mt-1">
                                            <span className="font-outfit font-semimedium text-[12px] leading-[16px] text-[#001D65]">Vehículo</span>
                                            <Image src="/icons/edit.svg" alt="Edit" width={16} height={16} className="ml-1" />
                                        </div>
                                    </div>
                                    <div className={`flex-1 flex relative h-[3px] rounded-full bg-[#D9D9D9] mx-[5px] my-0`}></div>

                                    {/* Step 3 */}
                                    <div className="flex relative flex-col items-center">
                                        <div className={`w-[20px] h-[20px] rounded-full border-2 border-[#D9D9D9] flex items-center justify-center font-open-sans font-medium text-[12px] leading-[16px] text-[#474953]`}>
                                            3
                                        </div>
                                        <span className="flex absolute left-1/2 top-full -translate-x-1/2 items-center mt-1 font-outfit font-semimedium text-[12px] leading-[16px] text-[#474953]">Extras</span>
                                    </div>
                                    <div className={`flex-1 flex relative h-[3px] rounded-full bg-[#D9D9D9] mx-[5px] my-0`}></div>

                                    {/* Step 4 */}
                                    <div className="flex relative flex-col items-center relative ">
                                        <div className={`w-[20px] h-[20px] rounded-full border-2 border-[#D9D9D9] flex items-center justify-center font-open-sans font-medium text-[12px] leading-[16px] text-[#474953]`}>
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
                    </div>
                </div>
            </div>
        </>
    );
}