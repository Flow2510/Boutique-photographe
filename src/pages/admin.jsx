import Dashboard from "../components/dashboard/dashboard";

export default function Admin({user, items}){
    if (!user) {
        return <p>Chargement...</p>;
    }

    return(
        <main>
            {user.role === "admin" && 
                <Dashboard items={items} user={user} />
            }
            {user.role !== "admin" && 
                <p>Vous n'avez pas les droits pour accedez au menu</p>
            }
        </main>
    )
}