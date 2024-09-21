export default function Cont(){
    return(
        <>
            <div className="mt-20 flex justify-center items-center ">
            <div className="object-cover animate-move-image">
                <h1 className="ttext-gray-400 text-4xl font-semibold ">Sending Money is<br></br> Easier than before</h1>
                <p className=" mt-5">Lorem ipsum dolor sit amet, <br></br> consectetur adipiscing elit. Sed sed <br></br> consectetur libero. Curabitur.</p>
                <div className="mt-5">
                    <a href="#" className="bg-red-600 text-white px-4 py-2 rounded ">Sign in</a>
                </div>
            </div>
            <div className="">
                <img src="./Container/container.png" className="transition-transform duration-500 ease-in-out transform hover:scale-110"/>
            </div>
            
            </div>
        </>
    )
}