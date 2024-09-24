export default {
    logo: <span>Pandora Helper</span>,
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
    useNextSeoProps() {
        return {
            titleTemplate: '%s - Pandora Helper',
        }
    }
}