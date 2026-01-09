import type { IconType } from "react-icons";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaCss3, FaDocker, FaGitAlt, FaHtml5, FaJava, FaReact, FaAngular } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiSpring, SiOpenapiinitiative  } from "react-icons/si";

export interface SkillInterface {
    name: string,
    icon : IconType
}

export const frontendSkills: SkillInterface[] = [
    {
        name: 'Angular',
        icon: FaAngular
    },

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
    },
    {
        name: 'OpenAPI',
        icon: SiOpenapiinitiative
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