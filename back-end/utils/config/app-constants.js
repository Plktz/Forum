module.exports = {
    SCHEMAS : {
        USER : 'users',
        COMMENT : 'comments',
        DISCUSSION : 'discussions'
    },
    ROUTES : {
        HOME : '/',
        USER:{
            USER: '/user',
            LOGIN :'/login',
            REGISTER:'/register'
        },
        DISCUSSION:{
            DISCUSSION: '/discussion',
            CREATE: '/create',
            READ: '/read',
            READRECENT: '/readrecent'
        },
        COMMENT:{
            COMMENT: '/comment',
            CREATE: '/create',
            READ: '/read'
        }
    }

}