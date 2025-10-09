export interface ProjectInterface {
    name: string,
    description: string,
    frontendRepo: RepoLink,
    backendRepo: RepoLink,
    stackTags: string[],
    screenshotProjectRoute: string,
    prodUrl: string,
}

export interface RepoLink {
    name: string,
    link: string
}

const commonStack: string[] = ['React', 'Spring-Boot', 'MySql'];

export const arrProjects: ProjectInterface[] = [
    {
        name: 'Workline',
        description: 'Workline es un portal de empleo donde encontrar nuevas oportunidades laborales, ' +
                     'ya sea encontrando tu trabajo o candidato ideal para tu empresa' +
                     '.',
        frontendRepo: {
            name: 'Front-End',
            link: 'https://github.com/MiguelRodriguezPerez/Workline-UI'
        },
        backendRepo: {
            name: 'Back-End',
            link: 'https://github.com/MiguelRodriguezPerez/Workline-BackEnd'
        },
        stackTags: commonStack,
        screenshotProjectRoute: '../../../public/images/worklineCaptura.png',
        prodUrl: 'https://www.worklinejobs.com'
    },
    {
        name: 'Weavile Team Builder',
        description: 'Planea y diseña tu equipo pokemón ideal con esta aplicación. ' +
                     'Además podrás analizar que tipos cubre cada pokemón ' +
                     'para crear sinergias óptimas entre sus miembros',
        frontendRepo: {
            name: 'Front-End',
            link: 'https://github.com/MiguelRodriguezPerez/WeavileTeamBuilder-FrontEnd'
        },
        backendRepo: {
            name: 'Back-End',
            link: 'https://github.com/MiguelRodriguezPerez/WeavileTeamBuilder-BackEnd'
        },
        stackTags: commonStack,
        screenshotProjectRoute: '../../../public/images/weavileCaptura.png',
        prodUrl: 'https://www.weavileteambuilder.com'
    },
];