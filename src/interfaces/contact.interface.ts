import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


export interface contactInterface  {
    name: string,
    link: string,
    icon: IconType,
}

export const contactList: contactInterface[] = [
    { 
        name:'Github', 
        link: 'https://github.com/MiguelRodriguezPerez', 
        icon: FaGithub 
    },
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/miguel-rodr%C3%ADguez-p%C3%A9rez-0b9801347/',
        icon: FaLinkedin
    },
    {
        name: 'Gmail',
        link: 'mailto:miguelrodper99@gmail.com',
        icon: BiLogoGmail
    },
] 