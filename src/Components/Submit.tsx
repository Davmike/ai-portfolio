import { useContext, useEffect } from 'react'
import { MyContext } from './Context';

function Submit() {
    const context = useContext(MyContext);
    const {
        successMessage,
        setSuccessMessage
    }: any = context;

    useEffect(() => {
        if (!successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [successMessage]);


    return (
        !successMessage && (
            <div className="fixed inset-0 z-10 flex items-center justify-center" id="sign">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.1px] grayscale-[100%]"></div>

                <div className="bg-[#1E222C] flex justify-center items-center flex-col gap-5 text-white rounded-lg shadow-lg w-[400px] max-w-[90%] p-6 relative z-10">
                    <img src="/assets/done.png" alt="" />

                    <p className="mb-6 text-center text-green-500 text-[12px]">
                        YOUR MESSAGE HAS BEEN SENT SUCCESSFULLY.
                    </p>
                </div>
            </div>
        )

    )
}

export default Submit