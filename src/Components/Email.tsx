import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "./Context";
import emailjs from '@emailjs/browser';


function Email() {
    const context = useContext(MyContext);
    const {
        isEmail,
        setIsEmail,
        name,
        setName,
        validEmail,
        setValidEmail,
        message,
        setMessage,
        isButtonDisabled,
        setIsButtonDisabled,
        setSuccessMessage,
    }: any = context;

    // textarea size controler
    const EmailtextareaRef = useRef<any>(null);

    const handleInputEmail = () => {
        const emailTextarea = EmailtextareaRef.current;
        emailTextarea.style.height = 'auto';
        emailTextarea.style.height = `${Math.min(emailTextarea.scrollHeight, 294)}px`;
    };

    const [errors, setErrors] = useState({ name: "", email: "", message: "" });

    const form = useRef<HTMLFormElement>(null);

    // Validation logic
    const handleValidation = () => {
        const newErrors = { name: "", email: "", message: "" };

        // Check if name is empty
        if (!name.trim()) {
            newErrors.name = "Please write your good name";
        }

        // Check if email is empty or invalid
        if (!validEmail.trim()) {
            newErrors.email = "Email cannot be empty";
        } else if (!/\S+@\S+\.\S+/.test(validEmail)) {
            newErrors.email = "Please enter a valid email address";
        }

        // Check if message is empty
        if (!message.trim()) {
            newErrors.message = "Message cannot be empty";
        }

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

    // Handle form submit
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate form
        if (handleValidation()) {
            if (form.current) {
                emailjs
                    .sendForm("service_p5qllw9", "template_v3z9d9f", form.current, "eqogUB61J7lo2Ci_S")
                    .then(
                        () => {
                            setSuccessMessage(false)
                            // Clear input fields
                            setName('');
                            setValidEmail('');
                            setMessage('');
                            setErrors({ name: "", email: "", message: "" }); // Clear errors on success
                        },
                        (error) => {
                            console.log("FAILED...", error.text);
                        }
                    );
            }
        }
    };

    // Check if all inputs are filled correctly
    useEffect(() => {
        if (name.trim() && validEmail.trim() && message.trim() && handleValidation()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [name, validEmail, message]);


    {/* contact main div start here */ }

    return (
        !isEmail && (
            <div className="fixed inset-0 z-10 flex items-center justify-center" id="sign">
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.1px] grayscale-[100%]" onClick={() => setIsEmail(!isEmail)}></div>

                <div className="bg-[#1E222C] text-white rounded-lg shadow-lg w-[400px] max-w-[90%] p-6 relative z-10">
                    <button
                        className="absolute text-gray-400 top-4 right-4 hover:text-white"
                        onClick={() => setIsEmail(!isEmail)}
                    >
                        &times;
                    </button>
                    <h2 className="mb-2 text-[18px] font-semibold uppercase" id="login-text">GET IN TOUCH!</h2>
                    <p className="pl-3 mb-6 text-gray-400 border-l-2 border-[#F04D40] text-[12px]">
                        I’m thrilled that you’re interested in connecting with me on social media!
                    </p>

                    {/* validation and inputs form */}
                    <form ref={form} onSubmit={sendEmail}>
                        {/* name input */}
                        <div className="mb-4">
                            <label id="emailvalidation" htmlFor="title" className="block mb-2 text-lg font-medium">
                                Your Name
                            </label>
                            <input
                                name="user_name"
                                type="text"
                                id="title"
                                placeholder="What's your good name?"
                                className={`w-full bg-[#ffffff] border rounded-md p-2 text-black focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 focus:ring-red-500" : "border-gray-600 focus:ring-[#F04D40]"
                                    }`}
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    if (errors.name) setErrors({ ...errors, name: "" });
                                }}
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                        </div>

                        {/* email input */}
                        <div className="mb-4">
                            <label id="emailvalidation" htmlFor="email" className="block mb-2 text-lg font-medium">
                                Your email
                            </label>
                            <input
                                name="user_email"
                                type="text"
                                id="email"
                                placeholder="What's your email?"
                                className={`w-full bg-[#ffffff] border rounded-md p-2 text-black focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-600 focus:ring-[#F04D40]"
                                    }`}
                                value={validEmail}
                                onChange={(e) => {
                                    setValidEmail(e.target.value);
                                    if (errors.email) setErrors({ ...errors, email: "" });
                                }}
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                        </div>

                        {/* message input */}
                        <div className="mb-4">
                            <label id="emailvalidation" htmlFor="message" className="block mb-2 text-lg font-medium">
                                Message
                            </label>
                            <textarea
                                ref={EmailtextareaRef}
                                name="message"
                                id="message"
                                placeholder="What you want to say?"
                                className={`w-full bg-[#ffffff] border rounded-md p-2 text-black h-32 focus:outline-none focus:ring-2 resize-none ${errors.message ? "border-red-500 focus:ring-red-500" : "border-gray-600 focus:ring-[#F04D40]"
                                    }`}
                                value={message}
                                onInput={() => {
                                    handleInputEmail();
                                }}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    if (errors.message) setErrors({ ...errors, message: "" });
                                }}
                            />
                            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                        </div>

                        <button
                            id="gmail"
                            type="submit"
                            className="mt-[10px] border-none rounded-[4px] bg-[#F04D40] cursor-pointer font-bold text-[1.15rem] px-[15px] py-[8px]"
                            aria-disabled={isButtonDisabled}
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        )
    )
}

export default Email
