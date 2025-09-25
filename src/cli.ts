import { compose } from './functions/compose'


const main = async (): Promise<void> => {
    console.log('The firs DEATH problem "Compose"')
    compose()
};

main().catch(console.error)

