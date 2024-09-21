export default {
    logo: <span>Pandora Helper</span>,
    project: {
        link: 'https://github.com/nianhua99/PandoraHelper'
    },
    banner: {
        text: (
            <a href={'https://github.com/nianhua99/PandoraHelper'} target={'_blank'}>
                如果帮到你了，为我点个Star⭐️吧！ Read More →
            </a>
        )
    },
    useNextSeoProps() {
        return {
            titleTemplate: '%s - Pandora Helper',
        }
    }
}