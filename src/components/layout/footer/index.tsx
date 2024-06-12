"use client";

export const Footer = () => {
    return (
        <footer className="bg-black text-white w-full h-72 flex flex-row items-center justify-center">
            <div className="flex w-9/12 items-center justify-between">
                <div className=" flex flex-col w-80 h-56 gap-3">
                    <img className="w-6	h-5	" src="img/vector.png" alt="" />
                    <p className="text-sm">Managed by Solana Foundation</p>
                    <div className="flex gap-2">
                    <img src="img/frame.png" alt="" />
                    <img src="img/frame.png" alt="" />
                    <img src="img/frame.png" alt="" />
                    <img src="img/frame.png" alt="" />
                    <img src="img/frame.png" alt="" />
                    <img src="img/frame.png" alt="" />
                    </div>
                    <small className="text-gray-500">©2023 Solana Foundation. All rights reserved.</small>
                </div>
                <div className="flex w-96 h-56">
                    <div className=" flex flex-col w-40 h-56 gap-2.5">
                        <p>Solana</p>
                        <p className="text-gray-500 text-sm">Grants</p>
                        <p className="text-gray-500 text-sm">Break Solana</p>
                        <p className="text-gray-500 text-sm">Media Kit</p>
                        <p className="text-gray-500 text-sm">Careers</p>
                        <p className="text-gray-500 text-sm">Disclaimer</p>
                    </div>
                    <div className="w-72 h-56 flex flex-col w-40 h-56 gap-2.5">
                        <p>Get Connected</p>
                        <p className="text-gray-500 text-sm text-sm">Ecosystem</p>
                        <p className="text-gray-500 text-sm text-sm">Blog</p>
                        <p className="text-gray-500 text-sm text-sm">Newsletter</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}