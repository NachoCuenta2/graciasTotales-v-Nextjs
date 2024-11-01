export default function (){


    return (
       <>
            <input 
            type="text"
            placeholder="Email@google.com"
            className="text-lg w-full bg-customGray border border-white rounded sm shadow-[0_4px_10px_#333] text-white placeholder-gray-300"
            style={{height:'50px'}}
            />
            <input 
            type="password"
            placeholder="Contraseña"
            className="text-lg w-full bg-customGray border border-white rounded sm shadow-[0_4px_10px_#333] text-white placeholder-gray-300"
            style={{height:'50px', marginTop:'20px'}}
            />
            <div className="flex w-full justify-center gap-5 mt-5">

            <button
            className="btn bg-white rounded-sm w-52"
            >Google</button>
            <button
            className="btn bg-white rounded-sm w-52"
            >Iniciar</button>
            </div>
       </>
    )
}