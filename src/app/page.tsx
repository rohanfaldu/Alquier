'use client';
import Image from "next/image";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
    const [activeTab, setActiveTab] = useState('new');
    const [isPickupOfficeOpen, setIsPickupOfficeOpen] = useState(false);
    const [isPickupOfficeOpen1, setIsPickupOfficeOpen1] = useState(false);
    const [isDropoffOfficeOpen, setIsDropoffOfficeOpen] = useState(false);
    const [isDropoffOfficeOpen1, setIsDropoffOfficeOpen1] = useState(false);
    const [selectedPickupOffice, setSelectedPickupOffice] = useState('');
    const [selectedPickupOffice1, setSelectedPickupOffice1] = useState('');
    const [selectedDropoffOffice, setSelectedDropoffOffice] = useState('');
    const [pickupDate, setPickupDate] = useState("");
    const [pickupDate1, setPickupDate1] = useState("");
    const [pickupTime, setPickupTime] = useState("");
    const [pickupTime1, setPickupTime1] = useState("");
    const [dropoffDate, setDropoffDate] = useState("");
    const [dropoffTime, setDropoffTime] = useState("");
    const [isDifferentOffice, setIsDifferentOffice] = useState(false);
    const router = useRouter();
    const handleInputFocus = (fieldName: string) => {
        console.log(`Focused: ${fieldName}`);
    };
    // Add error states
    const [errors, setErrors] = useState({
        pickupOffice: '',
        pickupOffice1: '',
        pickupDate: '',
        pickupDate1: '',
        pickupTime1: '',
        pickupTime: '',
        dropoffOffice: '',
        dropoffDate: '',
        dropoffTime: ''
    });

    // Add validation function
    const validateForm = () => {
        let tempErrors = {
            pickupOffice: '',
            pickupOffice1: '',
            pickupDate: '',
            pickupDate1: '',
            pickupTime: '',
            pickupTime1: '',
            dropoffOffice: '',
            dropoffDate: '',
            dropoffTime: ''
        };
        let isValid = true;

        if (!selectedPickupOffice) {
            tempErrors.pickupOffice = 'Por favor, selecciona una oficina de recogida';
            isValid = false;
        }

        if (!selectedPickupOffice1) {
            tempErrors.pickupOffice1 = 'Por favor, selecciona una oficina de recogida';
            isValid = false;
        }

        if (!pickupDate) {
            tempErrors.pickupDate = 'Por favor, selecciona una fecha de recogida';
            isValid = false;
        }

        if (!pickupTime) {
            tempErrors.pickupTime = 'Por favor, selecciona una hora de recogida';
            isValid = false;
        }

        if (!pickupDate1) {
            tempErrors.pickupDate1 = 'Por favor, selecciona una fecha de recogida';
            isValid = false;
        }

        if (!pickupTime1) {
            tempErrors.pickupTime1 = 'Por favor, selecciona una hora de recogida';
            isValid = false;
        }

        if (isDifferentOffice) {
            if (!selectedDropoffOffice) {
                tempErrors.dropoffOffice = 'Por favor, selecciona una oficina de devolución';
                isValid = false;
            }

            if (!dropoffDate) {
                tempErrors.dropoffDate = 'Por favor, selecciona una fecha de devolución';
                isValid = false;
            }

            if (!dropoffTime) {
                tempErrors.dropoffTime = 'Por favor, selecciona una hora de devolución';
                isValid = false;
            }
        }

        setErrors(tempErrors);
        return isValid;
    };

    // Add click outside handler
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.dropdown-container')) {
                setIsPickupOfficeOpen(false);
                setIsDropoffOfficeOpen(false);
            }
        };
    
        const handleClickOutside1 = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.dropdown-container')) {
                setIsPickupOfficeOpen1(false);
                setIsDropoffOfficeOpen1(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('mousedown', handleClickOutside1);
    
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('mousedown', handleClickOutside1);
        };
    }, []);
    

    // Modify the form elements to include error messages
    return (
        <div className="">
            <div className="flex w-full justify-center text-left">
                <div className="flex w-full justify-center text-left ml-[57px] mr-[57px]">
                    <div className="flex w-full border-b border-[#E5E7EB]">
                        <div
                            className={`flex w-1/2 justify-center items-center gap-2 py-3 cursor-pointer  ${activeTab === 'new' ? 'border-b-2 border-[#003893] mb-[4px]' : 'mb-[4px]'
                                }`}
                            onClick={() => setActiveTab('new')}
                        >
                            <Image
                                src="/icons/alquiler.svg"
                                alt="Header"
                                width={24}
                                height={24}
                            />
                            <span className={`font-outfit font-medium text-[14px] leading-[20px] ${activeTab === 'new' ? 'text-[#0E1330] ' : 'text-[#787B8B]'
                                }`}>
                                Nuevo alquiler
                            </span>
                        </div>
                        <div
                            className={`flex w-1/2 justify-center items-center py-3 cursor-pointer ${activeTab === 'my' ? 'border-b-2 border-[#003893] mb-[4px]' : 'mb-[4px]'
                                }`}
                            onClick={() => setActiveTab('my')}
                        >
                            <span className={`font-outfit font-medium text-[14px] leading-[20px] ${activeTab === 'my' ? 'text-[#0E1330]' : 'text-[#787B8B]'
                                }`}>
                                Mis alquileres
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <Image
                    src="/images/rental-banner.svg"
                    alt="Car rental banner"
                    className="w-full mx-auto "
                    width={768}
                    height={200}
                />
            </div>

            <div className="pt-[24px] pl-[20px] pr-[20px] bg-[#FFFFFF]">
                <div className="mb-[24px]">
                    <h2 className="font-outfit font-medium text-[24px] leading-[32px] text-[#003893] flex-1 text-left pb-[12px]">Alquiler de coche</h2>
                    <p className="font-outfit font-normal text-[16px] leading-[20px] text-[#2F3037]">
                        Selecciona una oficina y una fecha y podrás disfrutar de nuestro servicio de alquiler de coches lorem ipsum.
                    </p>
                </div>

                <div className="space-y-4 pb-[40px]">
                    <div className="dropdown-container">
                        <div className={`form-group relative border rounded-[4px] ${errors.pickupOffice ? 'border-red-500' : selectedPickupOffice ? 'border-[#006FC6]' : 'border-[#787B8B]'} overflow-hidden`}>
                            <button
                                type="button"
                                className="w-full px-2 py-4 bg-white flex items-center gap-2 text-left font-outfit text-[16px] leading-[20px]"
                                onClick={(e) => {
                                    setIsPickupOfficeOpen1(false);
                                    setIsDropoffOfficeOpen1(false);
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setIsPickupOfficeOpen(!isPickupOfficeOpen);
                                    setIsDropoffOfficeOpen(false);
                                }}
                            >
                                <Image src="/icons/map.svg" alt="Map" width={24} height={24} />
                                <span className={selectedPickupOffice ? 'text-[#0E1330]' : 'text-[#787B8B]'}>
                                    {selectedPickupOffice || 'Selecciona una oficina de recogida 1'}
                                </span>
                            </button>

                            {isPickupOfficeOpen && (
                                <ul className="fixed top-[295px] w-[87.5%] bg-white border rounded-lg shadow-lg z-50">
                                    {['Madrid Centro', 'Barcelona Centro', 'Valencia', 'Sevilla'].map((office) => (
                                        <li
                                            key={office}
                                            className="p-2 hover:bg-[#006FC6]/10 cursor-pointer text-[#0E1330]"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setSelectedPickupOffice(office);
                                                setErrors({ ...errors, pickupOffice: '' });
                                                setIsPickupOfficeOpen(false);
                                            }}
                                        >
                                            {office}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        {errors.pickupOffice && <p className="font-outfit font-normal text-[14px] leading-[20px] text-[#E01010]">{errors.pickupOffice}</p>}
                    </div>

                    <div>
                        <div className={`form-group grid grid-cols-2 border rounded text-[#787B8B] overflow-hidden ${errors.pickupDate1 || errors.pickupTime1 ? 'border-[#E01010]' : 'border-[#787B8B]'}`}>
                            {/* Date Input */}
                            <div className="w-full bg-white flex items-center pl-[8px] h-[56px] ">
                                <Image src="/icons/calander.svg" alt="Calendar" width={20} height={20} className="mr-[4px]" />
                                <input
                                    type="date"
                                    value={pickupDate1}
                                        onChange={(e) => {
                                            setPickupDate1(e.target.value);
                                            setErrors({ ...errors, pickupDate1: '' });
                                        }}
                                        onFocus={() => handleInputFocus("pickupDate1")}
                                    className="appearance-none bg-transparent outline-none text-[#787B8B] text-[16px] leading-[20px] font-outfit w-full"
                                />
                                <div className="w-px h-[24px] bg-[#787B8B]"></div>
                            </div>

                            {/* Time Input */}
                            <div className="w-full bg-white flex items-center px-4 gap-2 h-[56px]">
                                <Image src="/icons/clock.svg" alt="Clock" width={20} height={20} />
                                <input
                                    type="time"
                                    value={pickupTime1}
                                        onChange={(e) => {
                                            setPickupTime1(e.target.value);
                                            setErrors({ ...errors, pickupTime1: '' });
                                        }}
                                        onFocus={() => handleInputFocus("pickupTime1")}
                                    className="appearance-none bg-transparent outline-none text-[#787B8B] text-[16px] leading-[20px] font-outfit w-full"
                                />
                            </div>
                        </div>
                        {errors.pickupDate1 && ( <p className="font-outfit font-normal text-[14px] leading-[20px] text-[#E01010]">{errors.pickupDate1}</p>)}
                        {errors.pickupTime1 && ( <p className="font-outfit font-normal text-[14px] leading-[20px] text-[#E01010]">{errors.pickupTime1}</p> )}
                    </div>
                    
                        
                    <div className="dropdown-container">
                        <div className={`form-group relative border rounded-[4px] ${errors.pickupOffice1 ? 'border-[#E01010]' : selectedPickupOffice1 ? 'border-[#006FC6]' : 'border-[#787B8B]'} overflow-hidden`}>
                            <button
                                type="button"
                                className="w-full px-2 py-4 bg-white flex items-center gap-2 text-left font-outfit text-[16px] leading-[20px]"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setIsPickupOfficeOpen(false);
                                    setIsDropoffOfficeOpen(false);
                                    setIsPickupOfficeOpen1(!isPickupOfficeOpen1);
                                    setIsDropoffOfficeOpen1(false);
                                }}
                            >
                                <Image src="/icons/map.svg" alt="Map" width={24} height={24} />
                                <span className={selectedPickupOffice1 ? 'text-[#0E1330]' : 'text-[#787B8B]'}>
                                    {selectedPickupOffice1 || 'Selecciona una oficina de recogida 2'}
                                </span>
                            </button>

                            {isPickupOfficeOpen1 && (
                                <ul className="fixed top-[340px] w-[87.5%] bg-white border rounded-lg shadow-lg z-50">
                                    {['Madrid Centro', 'Barcelona Centro', 'Valencia', 'Sevilla'].map((office) => (
                                        <li
                                            key={office}
                                            className="p-2 hover:bg-[#006FC6]/10 cursor-pointer text-[#0E1330]"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setSelectedPickupOffice1(office);
                                                setErrors({ ...errors, pickupOffice1: '' });
                                                setIsPickupOfficeOpen1(false);
                                            }}
                                        >
                                            {office}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        {errors.pickupOffice1 && <p className="font-outfit font-normal text-[14px] leading-[20px] text-[#E01010]">{errors.pickupOffice1}</p>}
                    </div>
                    <div>
                        <div className={`form-group grid grid-cols-2 border rounded overflow-hidden ${errors.pickupDate || errors.pickupTime ? 'border-[#E01010]' : 'border-[#787B8B]'}`}>
                            {/* Date Input */}
                            <div className="w-full bg-white flex items-center pl-[8px] h-[56px]">
                                <Image src="/icons/calander.svg" alt="Calendar" width={20} height={20} className={`mr-[4px] `} />
                                    <input
                                        type="date"
                                        value={pickupDate}
                                        onChange={(e) => {
                                            setPickupDate(e.target.value);
                                            setErrors({ ...errors, pickupDate: '' });
                                        }}
                                        onFocus={() => handleInputFocus("pickupDate")}
                                        className="appearance-none bg-transparent outline-none text-[#787B8B] text-[16px] leading-[20px] font-outfit w-full"
                                    />
                                    <div className="w-px h-[24px] bg-[#787B8B]"></div>
                            </div>

                            {/* Time Input */}
                            <div className="w-full bg-white flex items-center px-4 gap-2 h-[56px]">
                                <div className={`flex items-center px-4 gap-2 h-[56px] ${errors.pickupTime ? 'border-red-500' : ''}`}>
                                    <Image src="/icons/clock.svg" alt="Clock" width={20} height={20} />
                                    <input
                                        type="time"
                                        value={pickupTime}
                                        onChange={(e) => {
                                            setPickupTime(e.target.value);
                                            setErrors({ ...errors, pickupTime: '' });
                                        }}
                                        onFocus={() => handleInputFocus("pickupTime")}
                                        className="appearance-none bg-transparent outline-none text-[#787B8B] text-[16px] leading-[20px] font-outfit w-full"
                                    />
                                </div>
                            </div>
                        </div>
                        {errors.pickupDate && ( <p className="font-outfit font-normal text-[14px] leading-[20px] text-[#E01010]">{errors.pickupDate}</p>)}
                        {errors.pickupTime && ( <p className="font-outfit font-normal text-[14px] leading-[20px] text-[#E01010]">{errors.pickupTime}</p> )}
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <input
                                type="checkbox"
                                id="different-office"
                                checked={isDifferentOffice}
                                onChange={(e) => setIsDifferentOffice(e.target.checked)}
                                className="h-5 w-5 appearance-none bg-white border border-[#787B8B] rounded-[4px] cursor-pointer checked:bg-[#FFFFFF] checked:border-[#003893] relative"
                            />
                            {isDifferentOffice && (
                                <Image
                                    src="/icons/checked.svg"
                                    alt="Check"
                                    width={16}
                                    height={16}
                                    className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                                />
                            )}
                        </div>
                        <label
                            htmlFor="different-office"
                            className="font-outfit font-normal text-[14px] leading-[20px] text-[#0E1330] cursor-pointer">
                            Devolver en otra oficina
                        </label>
                    </div>

                    <button
                        className="w-full bg-[#003893] text-white py-4 mt-[24px] rounded-[50px] font-medium"
                        onClick={() => {
                            if (validateForm()) {
                                // Check if all required fields are filled
                                const allFieldsFilled = 
                                    selectedPickupOffice && 
                                    selectedPickupOffice1 && 
                                    pickupDate && 
                                    pickupDate1 && 
                                    pickupTime && 
                                    pickupTime1 && 
                                    (!isDifferentOffice || (
                                        isDifferentOffice && 
                                        selectedDropoffOffice && 
                                        dropoffDate && 
                                        dropoffTime
                                    ));

                                if (allFieldsFilled) {
                                    router.push('/rental-detail');
                                } else {
                                    // If any field is missing, show appropriate error messages
                                    const newErrors = { ...errors };
                                    if (!selectedPickupOffice) newErrors.pickupOffice = 'Por favor, selecciona una oficina de recogida';
                                    if (!selectedPickupOffice1) newErrors.pickupOffice1 = 'Por favor, selecciona una oficina de recogida';
                                    if (!pickupDate) newErrors.pickupDate = 'Por favor, selecciona una fecha de recogida';
                                    if (!pickupDate1) newErrors.pickupDate1 = 'Por favor, selecciona una fecha de recogida';
                                    if (!pickupTime) newErrors.pickupTime = 'Por favor, selecciona una hora de recogida';
                                    if (!pickupTime1) newErrors.pickupTime1 = 'Por favor, selecciona una hora de recogida';
                                    
                                    if (isDifferentOffice) {
                                        if (!selectedDropoffOffice) newErrors.dropoffOffice = 'Por favor, selecciona una oficina de devolución';
                                        if (!dropoffDate) newErrors.dropoffDate = 'Por favor, selecciona una fecha de devolución';
                                        if (!dropoffTime) newErrors.dropoffTime = 'Por favor, selecciona una hora de devolución';
                                    }
                                    
                                    setErrors(newErrors);
                                }
                            }
                        }}
                    >
                        Continuar
                    </button>
                </div>
            </div>
        </div>
    );
}
