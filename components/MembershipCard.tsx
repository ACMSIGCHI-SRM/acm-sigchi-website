import Link from "next/link"

export default function MembershipCard() {
    return (
        <div className="w-full justify-center flex">
        <div className="w-[50%] h-fit flex-col bg-[#FFF4D9] rounded-lg">
            <h1 className="text-5xl font-bold text-black p-8">ACM Paid Membership</h1>
            <div className="p-8 text-xl text-black">
                    Commodo excepteur cupidatat culpa aute officia consectetur aliqua mollit elit eiusmod magna qui laborum proident. Magna aute velit id nostrud ad aute aliqua mollit duis adipisicing veniam sint velit velit. Adipisicing magna labore ea commodo et Lorem elit irure fugiat minim deserunt tempor quis. Ad deserunt laboris aute eiusmod deserunt id ullamco dolore magna. Dolor non adipisicing amet sint non incididunt. Velit ad consectetur officia esse occaecat exercitation qui est sint proident cillum exercitation.
            </div>
            <Link href={'https://www.google.com'}>
            <div className="justify-start flex p-8">
                <button className="h-fit bg-[#5080C6] text-white p-2 rounded-md">Click here to get paid membership</button>
            </div>
            </ Link>
        </div>
        </div>
    )

}
