import Link from "next/link";

export function Header(){
    return(
        <header className="w-full flex items-center px-2 py-4 bg-white h-20">
            <div>
                <Link href="/">
                    <h1 className="font-bold text-2xl">
                        <span className="text-blue-500">DEV</span>
                        CONTROLE
                    </h1>
                </Link>
            </div>
        </header>
    )
}