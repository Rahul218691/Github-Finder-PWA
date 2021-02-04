import React from 'react'


const PaginationComp = ({reposPerPage,totalRepos,paginate}) => {
  // console.log(reposPerPage,totalRepos,paginate)
  const pageNumbers = [];
  for(let i=1;i<=Math.ceil(totalRepos/reposPerPage);i++){
		pageNumbers.push(i);
  }
  
    return (
        <nav aria-label="Page navigation example">
        <ul className="pagination">
            {
                pageNumbers.map(number=>(
                  <li key={number} className="page-item">
                    <a onClick={()=>paginate(number)} href="#!" className="page-link">
                      {number}
                    </a>
                  </li>
                ))
            }
        </ul>
      </nav>
    )
}

export default PaginationComp;
