export interface issueInterface {
    user: userInterface,
    id: number,
    labels: [labelInterface],
    assignees: [userInterface],
    body: string,
    title: string,
    created_at: any,
    closed_at: any
}

export interface userInterface {
    login: string,
    avatar_url: string
}

export interface commentInterface {
    user: userInterface,
    created_at: any,
    body: string
}

export interface labelInterface {
  name: string,
  color: string
}
