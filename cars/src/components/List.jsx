import React from 'react'

export default function List({data}) {
    return (
      <div className="list">
          <ul>
           {
              data.Results.length !== 0  ?  data.Results.map(item => 
                    <li>{item.Make_Name} <span>{item.Model_Name}</span></li>
                    )
                    :
                    <h2>Not Found</h2>
          }
          </ul>
      </div>
    )
}
