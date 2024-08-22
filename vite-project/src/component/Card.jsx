function Card(props){

    return(
        <>
        <div className="w-[18rem] shadow-xl rounded-2xl border-4  m-5 text-center">
            <img className="rounded-t-md h-50" src={props.img} alt="" />
            <h1 className="text-[2rem]">{props.name}</h1>
            <p className="text-gray-800">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi dolor voluptas facere odit, illo sapiente in nostrum eum ut asperiores sunt, quod incidunt neque voluptate vitae ipsum culpa? Id aut pariatur itaque nam nihil nostrum.
            </p>
            <button className="bg-green-600 text-white rounded-md w-[100%] p-2 mt-3">Hire Me</button>
        </div>
        </>
    )
}
export default Card;