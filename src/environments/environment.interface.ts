interface IAppInfo {
  name: string
  description: string
  version: string
}

interface IContacts {
  email: string
  github: string
  linkedin: string
  djinni: string
  cv: string
}

export default interface IEnvironment {
  production: boolean
  appInfo: IAppInfo
  contacts: IContacts
}
