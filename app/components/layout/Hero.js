import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
    return (
        <section className="hero mt-4 grid grid-cols-2">
            <div className="py-12">
                <h1 className="text-4xl font-semibold leading-snug">
                    Everything<br/> 
                    is better<br/> 
                    with a&nbsp;
                    <span className="text-primary">
                        Pizza
                    </span>
                </h1>
                <p className="my-6 text-gray-500 text-sm leading-6">
                    Pizza is the missing piece that makes every day complete, a simple yet delicious joy in life
                </p>
                <div className="flex items-center gap-4">
                    <button className="bg-primary flex gap-2 text-white px-4 py-2 rounded-full justify-center">
                        Order now
                        <Right />
                    </button>
                    <button className="flex gap-2 justify-center">
                        Learn more
                        <Right />
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image src={'/pizza.png'} layout={'fill'} alt={'pizza'} objectFit="contain" />
            </div>
        </section>
    );
}