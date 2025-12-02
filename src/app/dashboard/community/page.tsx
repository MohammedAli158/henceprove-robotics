"use client"
import CommunityCard, { content } from "@/app/components/CommunityCard"

export default function Community(){
   const contents: content[] = [
  {
    logo: "https://i.pravatar.cc/100?img=1",
    name: "Alid",
    content: "Sir my name is not displayed",
    likeCount: 5,
    replyCount: 6,
    time: Date.now(),
  },
  {
    logo: "https://i.pravatar.cc/100?img=2",
    name: "Riya",
    content: "Frontend is fun until CSS decides to humble you.",
    likeCount: 12,
    replyCount: 3,
    time: Date.now() - 1000 * 60 * 60 * 24 * 4,
  },
  {
    logo: "https://i.pravatar.cc/100?img=3",
    name: "Zane",
    content: "Next.js routing is actually clean when it works.",
    likeCount: 18,
    replyCount: 10,
    time: Date.now() - 1000 * 60 * 60 * 24 * 10,
  },
  {
    logo: "https://i.pravatar.cc/100?img=4",
    name: "Meera",
    content: "Bro I just realized my backend crash was one missing comma.",
    likeCount: 7,
    replyCount: 1,
    time: Date.now() - 1000 * 60 * 60 * 24 * 30,
  },
  {
    logo: "https://i.pravatar.cc/100?img=5",
    name: "Arun",
    content: "Docker images feasting on my storage like it's a buffet.",
    likeCount: 29,
    replyCount: 14,
    time: Date.now() - 1000 * 60 * 60 * 24 * 50,
  },
  {
    logo: "https://i.pravatar.cc/100?img=6",
    name: "Sana",
    content: "TS errors build character. Painful character.",
    likeCount: 3,
    replyCount: 0,
    time: Date.now() - 1000 * 60 * 60 * 24 * 65,
  },
  {
    logo: "https://i.pravatar.cc/100?img=7",
    name: "Leo",
    content: "Just wrote code so cursed even ChatGPT refused to format it.",
    likeCount: 41,
    replyCount: 20,
    time: Date.now() - 1000 * 60 * 60 * 24 * 80,
  }
];

    return (
        <section className="m-7 pl-7 grid gap-5 grid-cols-1  md:grid-cols-3 h-[75vh]" >
            {
                contents.map((content,i)=>{
                    return <div  key={i}>
                        <CommunityCard content={content} />
                        <input type="text" placeholder="reply" className=" mx-5 w-[90%] focus:outline-none py-3 px-5 border border-[#e5e5e5] rounded-lg " />
                        </div>
                })
            }
        </section>
    )
}