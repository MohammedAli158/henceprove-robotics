import MySwiper from "../components/Swiper"
export default function SwiperSection() {
    return (
     <div className="flex flex-col mt-25 items-center dark:text-white" >
      <h1 className="font-bold text-5xl" ><span className="font-bold text-5xl text-red-500" >5.5 million</span> projects and counting...</h1>
       <MySwiper/>
     </div>
    )
}