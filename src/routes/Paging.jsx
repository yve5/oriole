import React from 'react';

const Paging = () => (
  <div className="card">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>

        <nav>
          <ul className="pagination">
            {['Previous', '1', '2', '3', 'Next'].map((item) => (
              <li className="page-item" key={item}>
                <button className="page-link" type="button">
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </li>
    </ul>
  </div>
);

export default Paging;
