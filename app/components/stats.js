export default function Stats() {
    return (
        <div>
            <h1 className='font-black text-xl underline '>PLAYERS STATS</h1>
            {/* Table */}
            <table className='table-auto'>
                <thead>
                    <tr>
                        <th className='pr-4'>Player Name</th>
                        <th className='pr-4'>Goals</th>
                        <th className='pr-4'>Assists</th>
                        <th className='pr-4'>Points</th>
                        <th className='pr-4'>+-</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Player Name</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                    </tr>
                    <tr>
                        <td>Player Name</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                    </tr>
                    <tr>
                        <td>Player Name</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                        <td>X</td>
                    </tr>
                </tbody>
                See More...
            </table>
        </div>
    );
}
