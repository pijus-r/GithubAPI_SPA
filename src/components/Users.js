import React from "react";
import Alert from "./Alert";

const listURL = "https://api.github.com/users";

function Users() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      var data = await fetch(listURL).then(res => {
        return res.json();
      });
      //console.log(data);
      setItems(data);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container container-c">
      <Alert/>
      <div className="row">
        {items.map(item => (
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <div className="container">
                  <div className="row">
                    <div className="col-1 col-sm-1">
                      <span className="badge badge-light">{item.id}</span>
                    </div>
                    <div className="col-4 col-sm-5">
                      <img
                        src={item.avatar_url}
                        className="card-img-top rounded-circle"
                      />
                    </div>
                    <div className="col-4 col-md-5">
                      <h5 className="card-subtitle mb-2 text-muted">Github</h5>
                      <h6 className="card-title">{item.login}</h6>
                      <div className="dropdown">
                        <button
                          className="btn btn-outline-dark dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Navigate to
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a
                            className="dropdown-item"
                            href={`https://www.github.com/${item.login}`}
                          >
                            Profile →
                          </a>
                          <a
                            className="dropdown-item"
                            href={`https://github.com/${item.login}?tab=repositories`}
                          >
                            Repositories →
                          </a>
                          <a
                            className="dropdown-item"
                            href={`https://www.github.com/${item.login}/followers`}
                          >
                            Followers →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="shadowToTop"></div>
    </div>
  );
}

export default Users;
