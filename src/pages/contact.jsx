import ContactForm from "../components/contactform/contactform";

export default function Contact({user, session}){
    return(
        <main>
            <ContactForm 
                user={user}
                session={session}
            />
        </main>
    )
}