import { LuDot } from "react-icons/lu";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-100">
        <div>
            <img src="../../assets/depression.jpg" alt="depression" />
        </div>
        <div>
            <div className="header-btn flex items-center bg-accentGold w-fit p-4 text-backgroundGray rounded-full text-primaryPink"><LuDot />About Talk It Out<LuDot /></div>
            <h1 className="pt-10 text-3xl">Individual consult and therapy</h1>
            <p className="pt-2 text-sm">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.</p>

            <button>Get in Touch</button>
        </div>
    </div>
  )
}

export default About