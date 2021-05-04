import { Router, Request, Response, NextFunction } from 'express'

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void{
    if (req.session && req.session.loggedIn){
        return next()
    }

    res.status(403)
    res.send('Not permitted')
}

const router = Router()

router
.get('/login', (req: Request, res: Response) => {
    res.send(`
        <form method="POST"> 
            <div> 
                <label>Email</label>
                <input name = "email"/>
            </div>
            <div> 
                <label>Password</label>
                <input name="password" type="password"/>
            </div>
            <button>Submit</button>
        </form>
    `)
})
.post('/login', (req: RequestWithBody, res: Response) => {
    const { email, password } = req.body

    if (email && password && email === 'test@test.com' && password === 'pass'){
        req.session = { loggedIn: true }
        res.redirect('/')
    }else{
        res.send('Invalid data')
    }
})

.get('/', (req: Request, res: Response) => {
    if (req.session && req.session.loggedIn) {
        res.send(`
            <div> <h3> Logged in </h3> </div>
            <a href="/logount">Logount</a>
        `)
    } else {
        res.send(`
            <div> <h3> You are not logged in </h3> </div>
            <a href="/login">Login</a>
        `)
    }
})

.get('/logount', (req: Request, res: Response) => {
    req.session = undefined
    res.redirect('/')
})

.get('/protected', requireAuth, (req: Request, res: Response)=>{
    res.send(':D')
})

export { router }