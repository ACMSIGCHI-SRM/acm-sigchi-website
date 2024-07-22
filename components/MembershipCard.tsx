import Link from "next/link"

export default function MembershipCard() {
    return (
        <div className="w-full justify-center flex">
        <div className="lg:w-[50%] md:w-5/6 w-fit h-fit flex-col bg-[#FFF4D9] rounded-lg">
            <h1 className="text-5xl font-bold text-black p-8 pb-2">ACM Paid Membership</h1>
            <div className="p-8 pb-2 text-xl text-black">
            ACM offers the resources, access and tools to invent the future. No one has a larger global network of professional peers. No one has more exclusive content. No one presents more forward-looking events. Or confers more prestigious awards. Or provides a more comprehensive learning center. 
            </div>
            <Link target="_blank" href={'https://www.acm.org/membership/join'}>
            <div className="justify-start flex p-8">
                <button className="h-fit bg-[#5080C6] text-white p-2 rounded-md">Click here to get paid membership</button>
            </div>
            </ Link>
        </div>
        </div>
    )

}
