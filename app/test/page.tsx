"use client";

import { useEffect, useState } from "react";

export default function Page(){
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        async function fetchData(){
            try {
                const response = await fetch("/api/test");
                if (!response.ok) throw new Error("Failed to fetch data");
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unknown error");
            } finally {
                setLoading(false);
            }
        }
        
        fetchData();
    }, []);
    
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return(
        <>
        <div>
            <h1>Test API Data</h1>
            {data && (
                <div>
                    <p><strong>Message:</strong> {data.message}</p>
                    <p><strong>Timestamp:</strong> {data.timestamp}</p>
                    <h2>Data Items:</h2>
                    <ul>
                        {data.data.map((item: any) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
        </>
    )
}