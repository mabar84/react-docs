export const PassingPropsToAComponent = () => {
    return (
        <div>
            PassingPropsToAComponent
            <Gallery/>
        </div>
    );
}


export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>

            {/*<Profile name={'Maria Skłodowska-Curie'} imageId={'szV5sdG'} profession={'physicist and chemist'}*/}
            {/*         awardsCount={'4'}*/}
            {/*         awards={'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal'}*/}
            {/*         discovered={'polonium (chemical element)'}*/}
            {/*/>*/}
            {/*<Profile name={'Katsuko Saruhashi'} imageId={'YfeOqp2'} profession={'geochemist'}*/}
            {/*         awardsCount={'2'} awards={'Miyake Prize for geochemistry, Tanaka Prize'}*/}
            {/*         discovered={'a method for measuring carbon dioxide in seawater'}*/}
            {/*/>*/}
            <Profile3/>

        </div>
    );
}

function getImageUrl(imageId, size = 's') {
    return (
        'https://i.imgur.com/' +
        imageId +
        size +
        '.jpg'
    )
}

const Profile = ({name, imageId, profession, awardsCount, awards, discovered}) => {

    return <section className="profile">
        <h2>{name}</h2>
        <img
            className="avatar"
            src={getImageUrl(imageId)}
            alt={name}
            width={70}
            height={70}
        />
        <ul>
            <li>
                <b>Profession: </b>
                {profession}

            </li>
            <li>
                <b>Awards: {awardsCount} </b>
                ({awards})
            </li>
            <li>
                <b>Discovered: </b>
                {discovered}
            </li>
        </ul>
    </section>


}


/////

function Profile3() {
    return (
        <div>
            <Card>
                <h1>Photo</h1>
                <img
                    className="avatar"
                    src="https://i.imgur.com/OKS67lhm.jpg"
                    alt="Aklilu Lemma"
                    width={70}
                    height={70}
                />
            </Card>
            <Card>
                <h1>About</h1>
                <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to
                    schistosomiasis.</p>
            </Card>
        </div>
    );
}


const Card = (props) => {
    console.log(props)
    return (<>
        <div className="card">
            <div className="card-content">
                {props.children}
            </div>
        </div>
    </>)
}