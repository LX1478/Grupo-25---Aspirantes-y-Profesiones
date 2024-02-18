function Search(){
    return(
			<div className="search">
				<label htmlFor="search">
					<i className="bi bi-search" style={{fontSize: "1.5rem", color: "cornflowerblue"}}></i>
					<input type="text" id="search"/>
				</label>
			</div>
    )
}

export default Search;