import { GiUbisoftSun as Logo} from "react-icons/gi"
import { FaRegUser as IconUser} from "react-icons/fa";

export default function Header({isLogged, user}){
    return (
        <div className="flex bg-sky-800 h-14 dark: bg-sky-950 items-center p-5 justify-between">
            <Logo className="text-white text-4xl"></Logo>
            {isLogged && <p>{user?.nome} tem {user?.idade} anos</p>}
            {isLogged && <IconUser className="text-white text-3xl" />}
        </div>
    )
}