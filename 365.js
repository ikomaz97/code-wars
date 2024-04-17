type UserType = {
    id: number
    userName: string
    email: string
    password: string
}

type ChangeUserPasswordTypeAT = {
    type: "CHANGE-USER-PASSWORD"
    payload: {
        XXX
        YYY
    }
}

export const userReducer =
    (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {
    switch (action.type) {
        case "CHANGE-USER-PASSWORD":
            return state.map(u =>
                u.id === action.payload.id
                    ? {...u, password: action.payload.newPassword}
                    : u)
        default:
            return state
    }
}

[userID.toString()] используется для обращения к адресу пользователя в объекте addresses по его userID в виде строки.
...addresses[userID.toString()] создает копию адреса пользователя, чтобы не изменять исходный объект напрямую.
    [key]: newValue обновляет указанное поле key в адресе пользователя на новое значение newValue.