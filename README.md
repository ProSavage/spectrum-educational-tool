# Spectrum Educational Tool

An application that takes (premade) content and turns it into a course format for students on the learning spectrum to use.

Students need to sign up, verify email, and then go through a list of "case studies", answering discussion questions etc.

## Stack
### Frontend
The application is built using [NextJS](https://nextjs.org/) which is a [React](https://reactjs.org/) framework. <br/>
It also uses [chakra-ui](https://chakra-ui.com/) for its UI components. <br/>
I am also using typescript, and this repository only has the frontend code, since everything else is managed inside of supabase.

### Backend
I am using [supabase](https://supabase.io/) which is an (more) free, open source [firebase](https://firebase.google.com/) alternative.
It serves as an entire backend framework, providing a postgresql database, bucket storage, authentication, and much more.

It also is a great tool for this kind of application since users can use the supabase dashboard to manage data using the table editor, users, etc.
