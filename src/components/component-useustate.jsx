import { useState, createContext, useContext} from "react";

const UserContext = createContext();

const ComponentUseContext = () => {
    const [user, setUser] = useState("samriddhi");
    return (
            <div>
                <UserContext.Provider value={user} ><Component2 /></UserContext.Provider>
            </div>
    );
}

function Component2 ()  {
    return (
        <div>
            <h2>This is Component 2</h2>
            <Component3 />
        </div>
    )
}

function Component3 () {
    const user = useContext(UserContext);
    return (
        <>
            <h1>Component 3 </h1>
            <p>{`Hello ${user}`}</p>

        </>
    );
}

export default ComponentUseContext