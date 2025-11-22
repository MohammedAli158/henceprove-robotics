import PricingSection from "../components/PricingSection";

export default  function GetCourses() {
    return(
       <div className="relative h-full w-full bg-white">
  <div
    className=" fixed inset-0
    bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
    bg-[size:24px_24px]"
  />
  <PricingSection/>
</div>
    )
}
