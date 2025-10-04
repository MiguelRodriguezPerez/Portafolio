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
        description: 'Un zorro curioso caminaba lentamente bajo la luna brillante, mientras el viento suave movía las hojas secas y un búho observaba silencioso desde lo alto de un roble.',
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
        description: 'Un zorro curioso caminaba lentamente bajo la luna brillante, mientras el viento suave movía las hojas secas y un búho observaba silencioso desde lo alto de un roble.',
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