import Daiktas from "./Daiktas";

function Tvenkinys({seaPlaners}) {

    return (
        <>
        {
            seaPlaners.map(things => things.id % 2 ? <Daiktas key={things.id} Things={things}></Daiktas> : null)
        }
        {
            seaPlaners.map(things => things.id % 2 ? null : <Daiktas key={things.id} Things={things}></Daiktas>)
        }
        </>
    )
};

export default Tvenkinys;