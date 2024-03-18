import z from 'zod'

// Signup validation
export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
})
//signup input type inference
export type SignupInput = z.infer<typeof signupInput>

//SignIn validation
export const signinInput = z.object({
    email: z.string().email(),
    password: z.string()
})

//signin input type inference
export type SigninInput = z.infer<typeof signinInput>

//BlogCreation input validation
export const blogCreation = z.object({
    title: z.string(),
    content: z.string()
})

//BlogCreation type validation
export type createblogtype = z.infer<typeof blogCreation>


//BlogUpdation input validatio
export const blogUpdation = z.object({
    title: z.string(),
    content: z.string(),
    id: z.number()
})

//BlogCreation type validation
export type updateblogtype = z.infer<typeof blogUpdation>