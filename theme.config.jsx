export default {
    logo: <h1 className={"nx-text-3xl nx-font-bold"}>Pandora Helper</h1>,
    project: {
        link: 'https://github.com/nianhua99/PandoraHelper'
    },
    banner: {
        text: (
            <a href={'https://github.com/nianhua99/PandoraHelper'} target={'_blank'}>
                如果对你有帮助，为我点个Star⭐️吧！ Read More →
            </a>
        )
    },
    footer: {
        text: (
            <span>
                <a href="https://github.com/nianhua99/PandoraHelper" target="_blank">
                  Pandora Helper
                </a>
            </span>
        )
    },
    feedback: {
       content: null
    },
    editLink: {
        component: null,
    },
    head: (
        <>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Pandora Helper" />
            <meta name="keywords" content="Pandora Helper" />
            <link rel="icon" href="/oai-icon.ico" />
        </>
    ),
    useNextSeoProps() {
        return {
            titleTemplate: '%s - Pandora Helper',
        }
    }
}