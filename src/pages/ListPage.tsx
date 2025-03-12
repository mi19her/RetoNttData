import { useUserContext} from "../context/UserContext";
import User from "../components/User";

const ListPage = () =>{
    const {users, loading, error} = useUserContext();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Hubo un error en la carga de datos {error}</p>;

    return (
        <div>
            <h1>Lista de 10 personas</h1>
            <ul className="card">
                {users.map((user: any) => (
                    <User key={user.login.uuid} user={user} />
                ))}
            </ul>
        </div>
    );
}

export default ListPage;
