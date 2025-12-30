import ProfileForm from "../components/profileform/profileform";

export default function Profile({ user }){
    if (!user) return <p>Chargement...</p>

    return(
        <main>
            <ProfileForm user={user} />
        </main>
    )
}