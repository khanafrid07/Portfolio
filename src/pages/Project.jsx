import Card from "../components/Card"

export default function Project(){
    return(
        <>
        <div className="text-center mt-5 " style={{color: "white"}}>

            <h1>Projects</h1>
        </div>
        <div className=" d-flex flex-wrap justify-content-center h-auto w-100  mt-4" >
           <Card/>
           <Card/>
           <Card/>
        </div>  
        </>
    )
}