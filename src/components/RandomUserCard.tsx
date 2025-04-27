import { useState, useEffect } from "react";

type RandomUserData = {
    username: string,
    sex: string,
    address: string,
    name: string,
    email: string,
    birthday: string
}

export default function RandomUserCard() {
    const [randomUser, setRandomUser] = useState<RandomUserData | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true);

    const fetchRandomUser = async () => {
        setLoading(true)
        try {
            const res = await fetch("https://api.api-ninjas.com/v1/randomuser", {
                headers: {
                    "X-Api-Key": import.meta.env.VITE_API_KEY
                }
            })
            if (!res.ok) throw new Error(`Error fetching Data ${res.status}`)
            const data = await res.json()
            setRandomUser(data)
            setError(null)
        } catch(err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchRandomUser();
    }, [])

    return (
        <div className="random-user-card">
            <h2>Random User Generator</h2>
            
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            {!loading && !error && randomUser && (
                <div className="fade-in">
                    <p><strong>Username: {randomUser?.username}</strong></p>
                    <p><strong>Sex: {randomUser?.sex}</strong></p>
                    <p><strong>Address: {randomUser?.address}</strong></p>
                    <p><strong>Name: {randomUser?.name}</strong></p>
                    <p><strong>Birthday: {randomUser?.birthday}</strong></p>
                </div>
            )}
            <button onClick={fetchRandomUser}>Click to generate a new User</button>
        </div>
    )
}