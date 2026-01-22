import type { AxiosResponse } from "axios";
import { userClickedWeavile, userClickedWorkline } from "../../api/UserClickedProjects";

export interface ProjectInterface {
    name: string,
    description: string,
    phoneDescription: string,
    frontendRepo: RepoLink,
    backendRepo: RepoLink,
    stackTags: string[],
    screenshotProjectRoute: string,
    prodUrl: string,
    clickedCallbackEvent: () => Promise<AxiosResponse<void, any, {}>>
}

export interface RepoLink {
    name: string,
    link: string
}

export const arrProjects: ProjectInterface[] = [
    {
        name: 'Workline',
        description: 'Workline es un portal de empleo donde encontrar nuevas oportunidades laborales, ' +
                     'ya sea encontrando tu trabajo o candidato ideal para tu empresa' +
                     '.',
        phoneDescription: 'Workline es un portal de empleo para ser contratado y contratar personal.',
        frontendRepo: {
            name: 'Front-End',
            link: 'https://github.com/MiguelRodriguezPerez/Workline-FrontEnd'
        },
        backendRepo: {
            name: 'Back-End',
            link: 'https://github.com/MiguelRodriguezPerez/Workline-BackEnd'
        },
        stackTags: ['Angular', 'Spring-Boot', 'MySql', 'Sass'],
        screenshotProjectRoute: '/images/worklineCaptura.png',
        prodUrl: 'https://www.worklinejobs.com',
        clickedCallbackEvent: userClickedWorkline
    },
    {
        name: 'Weavile Team Builder',
        description: "Planea y diseña tu equipo pokemón ideal con esta aplicación.\n" +
             "Además podrás analizar las coberturas ofensivas y defensias de sus miembros " +
             "para asegurar tu victoria.",
        phoneDescription: 'Planea y diseña tu equipo pokemón ideal.',
        frontendRepo: {
            name: 'Front-End',
            link: 'https://github.com/MiguelRodriguezPerez/WeavileTeamBuilder-FrontEnd'
        },
        backendRepo: {
            name: 'Back-End',
            link: 'https://github.com/MiguelRodriguezPerez/WeavileTeamBuilder-BackEnd'
        },
        stackTags: ['React', 'Spring-Boot', 'MySql','OpenAPI'],
        screenshotProjectRoute: '/images/weavileCaptura.png',
        prodUrl: 'https://www.weavileteambuilder.com',
        clickedCallbackEvent: userClickedWeavile
    },
];