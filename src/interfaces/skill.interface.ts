import type { IconType } from "react-icons";
import { FaReact, FaHtml5, FaCss3, FaJava, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";
import { SiSpring, SiMysql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export interface SkillInterface {
    name: string,
    icon : IconType
}

export const frontendSkills: SkillInterface[] = [
    {
        name: 'React',
        icon: FaReact
    },
    {
        name: 'Typescript',
        icon: BiLogoTypescript
    },
    {
        name: 'Javascript',
        icon: BiLogoJavascript
    },
    {
        name: 'CSS3',
        icon: FaCss3
    },
    {
        name: 'Html',
        icon: FaHtml5
    }
];

export const backendSkills: SkillInterface[] = [
    {
        name: 'Spring-Boot',
        icon: SiSpring
    },
    {
        name: 'Java',
        icon: FaJava
    },
    {
        name: 'MySql',
        icon: GrMysql
    }
]

export const devopsSkills: SkillInterface[] = [
    {
        name: 'Git',
        icon: FaGitAlt
    },
    {
        name: 'Docker',
        icon: FaDocker
    }
]