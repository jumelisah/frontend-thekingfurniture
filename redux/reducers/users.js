const dataUsers = {
    data: []
}

const users = (state = dataUsers, action) => {
    switch (action.type) {        
        case 'GET_USERS': {
            const data = action.payload
            state.data = data
            return {...state }
        }
        default: {
            return {...state }
        }
    }
}

export default users