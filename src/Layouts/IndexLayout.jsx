import React, { useState, useEffect } from 'react';
import PageHome from '../Pages/PageHome/PageHome';
import Links from '../Components/Links/Links';
import Loading from '../Components/Loading/Loading';

export default function IndexLayout() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay of 2 seconds
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <PageHome />
                    <Links />
                </>
            )}
        </div>
    );
}
