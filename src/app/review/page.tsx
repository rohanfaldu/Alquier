'use client';
import { useState } from 'react';
import Image from 'next/image';
//import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Review() {
    const router = useRouter();
    const [isShowFuelDetail, setIsShowFuelDetail] = useState(false);
    const [isShowBrackDownDetail, setIsShowBrackDownDetail] = useState(false);
    const handlefuelport = () => {
        const updateStatus = (isShowFuelDetail) ? false : true;
        setIsShowFuelDetail(updateStatus)
    }
    const handleBrackDown = () => {
        const updateStatus = (isShowBrackDownDetail) ? false : true;
        setIsShowBrackDownDetail(updateStatus)
    }
    return (
        <>
            <div className="bg-[#EAF6FC]">
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
                <div className="pb-[103px] pt-[40px] pr-[20px] pl-[20px]">
                    <div className="">
                        <div className="bg-[#EAF6FC] text-center">
                            <h1 className="text-[#003893] font-outfit text-[32px] font-bold mb-4">
                                Reserva confirmada
                            </h1>

                            <div className="bg-[#EAF6FC]  rounded-[12px] py-4 px-4 mx-auto max-w-[230px]">
                                <h2 className="text-[#003893] font-outfit text-[24px] leading-[32px] font-medium">
                                    Nº 282837-551776
                                </h2>
                            </div>

                            <p className="text-[#003893] font-outfit text-[16px] leading-[24px] max-w-[400px] mx-auto mt-[16px]">
                                Se ha enviado un correo de confirmación con los detalles de tu reserva
                            </p>
                        </div>
                    </div>
                    <div className="py-6">
                        <div className="bg-white rounded-[20px] p-4 shadow-sm border border-[#E5E7EB]">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-[#001D65] text-[18px] leading-[24px] font-outfit font-semibold mb-2">
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
                        </div>
                    </div>
                    {/* Content area */}
                    <div className="bg-white rounded-[20px] p-4 space-y-4 shadow-sm border border-[#E5E7EB]">
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
                            </div>
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
                                    <span className="text-[#474953] font-outfit text-[14px]">Descuento 1092912039CENT</span>
                                    <span className="text-[#003893] font-outfit text-[14px] font-bold">-10 €</span>
                                </div>
                                <div className="flex items-center justify-between border-t border-[#DBDCE2] p-2">
                                    <span className="text-[#474953] font-outfit text-[14px]">Centauro premium</span>
                                    <span className="text-[#003893] font-outfit text-[14px] font-bold">GRATIS</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}