import '../../css/dataTable.css'

export default function DataTable(props) {
    const { data = [] } = props;
    return (
        <div className="dataTable">
            <table className="table-cus table-bordered-cus">
                <thead className="dataTable__tablehead">
                    <tr>
                        <th>Sno.</th>
                        <th>BIN/INN</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>{data.map((load, key) => {
                    return (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{load.bin}</td>
                            <td>{load.call_count}</td>
                        </tr>
                    )
                })}</tbody>
            </table>
        </div>
    );
}
