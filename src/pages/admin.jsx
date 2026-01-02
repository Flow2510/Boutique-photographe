import Dashboard from "../components/dashboard/dashboard";
import Loading from "../components/loading/loading";

export default function Admin({user, items}){
    if (!user) {
        return <Loading />
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