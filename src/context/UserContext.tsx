import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { UserProps, UserContextType } from "../types"

const UserContext = createContext<UserContextType | undefined>(undefined);
export const useUserContext = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [users, setUsers] = useState<UserProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=10');
                const data = await response.json();
                setUsers(data.results);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Error fetching users');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <UserContext.Provider value={{ users, loading, error }}>
            {children}
        </UserContext.Provider>
    );
};


