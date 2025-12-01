import BookButton from "../components/BookButton"
import UniversalButton from "../components/UniversalButton"

export default function Dashboard(){
    const bg = ["bg-green-100","bg-orange-100","bg-blue-100"]
    const text =["text-green-600","text-orange-600","text-blue-600"]
    const titles = ["My Courses","My Bots","Free Courses"]
    const count = [0,0,1]
    const availablelCourses = [{
        title:"Foundational Electronics Kits",stages:5, age:5, projects:55,description:"lorem ipsum dolor enum es met"
    },{
        title:"Stage Courses",stages:5,age:5,projects:65,description:"Iam a big fan of henceprove robotics "
    },{
        title:"Mini Kits",stages:6,age:6, projects:55,description:"Iam a big fian of henceo fhaoiehf aksdlh dskf kdf a hjkdh"
    },{
        
        title:"Mini Kits",stages:6,age:6, projects:55,description:"Iam a big fian of henceo fhaoiehf aksdlh dskf kdf a hjkdh"
    }
]
    return (
        <section className="m-5 p-5" >
            <div className="flex gap-5">
                {
                    titles.map((t,i)=>{
                        return <div key={i} className={"shadow-[0_4px_10px_rgba(0,0,0,0.25)] rounded-md relative min-w-[20vw] min-h-[25vh] pl-5 pt-2  "  +(bg[i])} >
                            <p className={"text-5xl absolute bottom-15 " +(text[i])}>{count[i]}</p>
                            <p className={"absolute right-5 top-5 text-5xl "+ (text[i])} >{"->"}</p>
                            <h1 className={"text-xl absolute bottom-5 "} >{t}</h1>
                        </div>
                    })
                }
            </div>
           <div className="lower m-10 ml-0">
   <h1 className="m-10 ml-0 mb-5 text-3xl font-bold">Available Courses</h1>

   <div
     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
     >
     {availablelCourses.map((k, i) => {
         return (
             <div
             key={i}
             className={
                 "mt-5 max-w-[25vw] p-5 shadow-[0_4px_10px_rgba(0,0,0,0.25)] " +
                 bg[i % 3]
                }
                >
           <h1 className="text-xl mb-10">{k.title}</h1>
           <div className="flex">
             <div>
               <span className="rounded-full bg-white p-2 shadow-[0_4px_10px_rgba(0,0,0,0.25)] px-4 m-5">
                 {k.stages}
               </span>
               <p className="m-5 mt-3 font-bold ">STAGES</p>
             </div>

             <div>
               <span className="rounded-full bg-white p-2 shadow-[0_4px_10px_rgba(0,0,0,0.25)] m-5">
                 {k.age}+
               </span>
               <p className="m-5 mt-3 font-bold ">AGE</p>
             </div>

             <div>
               <span className="rounded-full bg-white p-2 shadow-[0_4px_10px_rgba(0,0,0,0.25)] m-5">
                 {k.projects}+
               </span>
               <p className="m-5 mt-3 font-bold ">PROJECTS</p>
             </div>
           </div>
             
<div className="text-center"><UniversalButton arg="Get to know" /></div>         </div>
       );
     })}
   </div>
</div>

        </section>
    )
}