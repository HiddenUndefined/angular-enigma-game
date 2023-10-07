import IEnvironment from './environment.interface'

/** Development environment */
export const environment: IEnvironment = {
  production: false,
  appInfo: {
    name: 'Game App',
    description: 'Game app based on the Angular v16',
    version: '0.2.1'
  },
  contacts: {
    email: 'fake@mail.my',
    github: 'https://github.com/#',
    linkedin: 'https://www.linkedin.com/#',
    djinni: 'https://djinni.co/#',
    cv: 'https://www.dropbox.com/#'
  }
}
