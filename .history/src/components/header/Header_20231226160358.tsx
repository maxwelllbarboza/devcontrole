import Link from "next/link";

export function Header(){
    return(
        <header className="w-full flex items-center px-2 py-4 bg-white h-20">
            <div>
                <Link href="/">
                    <h1>
                        <span className="text"></span>
                    </h1>
                </Link>
            </div>
        </header>
    )
}