export interface Msg { type: 'user' | 'gpt', msg: string }

export default [
    { type: 'user', msg: "hi i'm a user" },
    { type: 'gpt', msg: "hi user, i'm chat gpt" }
] as Msg[]