import React, { useEffect, useState } from 'react';
import { getServerData } from '../helper/helper';

export default function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const serverUrl = process.env.import.meta.env.VITE_SERVER_HOSTNAME; // Ensure correct env variable usage
        getServerData(`${serverUrl}/api/result`, (res) => {
            setData(res);
        });
    }, []); 

    return (
        <div>
            <table>
                <thead className='table-header'>
                    <tr className='table-row'>
                        <td>Name</td>
                        <td>Attempts</td>
                        <td>Earn Points</td>
                        <td>Result</td>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 && <tr><td colSpan="4">No Data Found</td></tr>} {/* ✅ Corrected conditional rendering */}
                    {
                        data.map((v, i) => (
                            <tr className='table-body' key={i}>
                                <td>{v?.username || ''}</td>
                                <td>{v?.attempts || 0}</td>
                                <td>{v?.points || 0}</td>
                                <td>{v?.achived || ""}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
