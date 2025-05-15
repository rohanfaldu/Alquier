'use client';
import { useState } from 'react';
import Image from 'next/image';
//import Link from 'next/link';
import { useRouter } from 'next/navigation';

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

export default function ExtraScreen() {
    const [count, setCount] = useState(0);
    const [chairsCount, setChairsCount] = useState(0);
    const router = useRouter();

    const handleExtraScreen = () => {
      router.push('/vehicle-sheet');
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
                        <div className={`p-4 bg-[#FFFFFF] shadow-sm pb-[36px]`}>
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
                                    <div className={`flex-1 flex relative h-[3px] rounded-full bg-[#003893] mx-[5px] my-0`}></div>

                                    {/* Step 3 */}
                                    <div className="flex relative flex-col items-center">
                                        <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center font-open-sans font-medium text-[12px] leading-[16px] bg-[#003893] text-white`}>
                                            3
                                        </div>
                                        <span className="flex absolute left-1/2 top-full -translate-x-1/2 items-center mt-1 font-outfit font-semimedium text-[12px] leading-[16px] text-[#001D65]">Extras</span>
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
                                            <button className="mt-4 w-full py-[18px] px-4  bg-[#F5F7F9] rounded-[50px] text-[#003893] font-outfit font-bold text-[14px] leading-[18px] ">
                                                Añadir
                                            </button>
                                        </div>

                                        <div className="border border-[#E5E7EB] pl-[24px] pb-[19px] pt-[24px] pr-[24px]">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <div className="flex items-center justify-center gap-2 mb-4">
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
                                                    <div className="flex items-center justify-center gap-2 mb-4">
                                                        <h3 className="font-outfit font-semibold text-[18px] leading-[24px] text-[#003893]">Sillas para bebés y niños</h3>
                                                        <div className="ml-auto">
                                                            {/* <span className="text-[#F118A7] font-outfit font-medium text-[20px] leading-[24px] pr-[7px]">¡Gratis!</span> */}
                                                            <span className="text-[#003893] font-medium font-outfit text-[24px] leading-[32px]">75€</span>
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
                                        <div className="pl-[24px] pb-[19px] pt-[24px] pr-[24px]">
                                            <div className="flex-1 justify-between items-start">
                                                <div>
                                                    <div className="flex items-center justify-center gap-2 mb-4">
                                                        <h3 className="font-outfit font-semibold text-[18px] leading-[24px] text-[#003893]">Cadenas para la nieve</h3>
                                                        <div className="ml-auto">
                                                            <span className="text-[#003893] font-medium font-outfit text-[24px] leading-[32px]">40€</span>
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
                                        <div className="pl-[24px] pb-[19px] pt-[10px] pr-[24px]">
                                            <button className="w-full py-3 px-4 bg-[#003893] rounded-[50px] text-[#FFFFFF] font-outfit font-medium text-[16px] leading-[20px] " onClick={() => handleExtraScreen()} >
                                                Continuar
                                            </button>
                                        </div>
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