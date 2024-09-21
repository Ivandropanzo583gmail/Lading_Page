import Link from "next/link";

export default function How_Works(){
    return(
        <>
            <div>
                <div className="flex flex-col items-center justify-center py-10 " id="How_Works">
                    <h2 className="text-4xl font-semibold mb-10">How it Works</h2>
                    <p className="text-gray-400 ">Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Donec porttitor.</p>
                    
                    <div className="block md:flex justify-around w-full max-w-4xl mt-20">
        
                        <div className="flex flex-col items-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-4">
                            <img
                            src="/How_Works/Ellipse_1.png" 
                            alt="Step 1"
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-lg font-medium">In-app transer</p>
                        <p className="text-gray-400 pt-5 ">Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Donec p</p>
                        </div>

                      
                        <div className="flex flex-col items-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-4">
                            <img
                            src="/How_Works/Ellipse_2.png" 
                            alt="Step 2"
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-lg font-medium">In-app transer</p>
                        <p className="text-gray-400 pt-5">Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Donec p</p>
                        </div>

                       
                        <div className="flex flex-col items-center">
                        <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-4">
                            <img
                            src="/How_Works/Ellipse_3.png" 
                            alt="Step 3"
                            className="w-full h-full object-cover"
                            />
                        </div>
                        <p className="text-lg font-medium">In-app transer</p>
                        <p className="text-gray-400 pt-5">Lorem ipsum dolor sit amet, consectetur <br></br> adipiscing elit. Donec p</p>
                        </div>
                    </div>
                
                </div>
                <div className="md:flex block justify-center items-center space-x-32 bg-gray-50">
                    <div>
                        <img src="./How_Works/undraw.png" className="transition-transform duration-500 ease-in-out transform hover:scale-110" />
                    </div>
                    <div className="">
                        <h2 className="text-3xl font-semibold max-md:mt-20">Real-time Currency<br></br> balance check</h2>

                        <p className="mt-5"> Lorem ipsum dolor sit amet, <br></br> consectetur adipiscing elit. Sed sed.</p>
                        <div className="mt-5">
                            <a className="text-purple-900 mt-5"><Link href="#" >Ream More ></Link></a>
                        </div>

                    </div>
                    
                </div>
               
            </div>
        </>
    )
}