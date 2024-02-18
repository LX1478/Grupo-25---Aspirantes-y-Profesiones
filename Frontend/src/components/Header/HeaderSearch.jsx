import Button from "./Button";
import Search from "./Search";

function HeaderSearch(){
    return(
        <section className="search-wrap">

			<Search />

			<div className="user-actions">
				<Button icon="bi bi-person-add"/>
				<Button icon="bi bi-person" />
				<Button icon="bi bi-box-arrow-right" />
			</div>
			
		</section>
    )
}

export default HeaderSearch;