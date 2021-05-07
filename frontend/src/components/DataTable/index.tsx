const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>09/10/2019</td>
                        <td>James Bond</td>
                        <td>32</td>
                        <td>15</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>14/08/2020</td>
                        <td>Jaspion</td>
                        <td>50</td>
                        <td>75</td>
                        <td>50000.00</td>
                    </tr>
                    <tr>
                        <td>02/08/1998</td>
                        <td>Microsoft</td>
                        <td>90</td>
                        <td>21</td>
                        <td>20000.00</td>
                    </tr>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Oracle</td>
                        <td>74</td>
                        <td>88</td>
                        <td>70000.00</td>
                    </tr>
                    <tr>
                        <td>01/04/1977</td>
                        <td>Cachorro Quente</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;