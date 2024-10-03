import { GiUbisoftSun as Logo} from "react-icons/gi"

export default function Header(){
    return (
        <div className="flex bg-sky-800 h-14 dark: bg-sky-950 items-center p-5">
            <Logo className="text-white text-4xl"></Logo>
        </div>
    )
}