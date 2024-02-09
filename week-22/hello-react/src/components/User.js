import PropTypes from "prop-types";

function User({name, surname, age, isLoggedIn, friends, address}){
    if (!isLoggedIn) {
        return <div>Giris Yapmadiniz</div>
    }
    return (
        <>
        <h1> {` Selam ${name} ${surname} (${age})`}</h1>
        {address.title} {address.zip}
        {
            friends &&
            friends.map((friend, index) => (
                <div key={index}>
                    {friend}
                </div>
            ))
        }
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired, // isRequired zorunlu oldugunu belirtmek icin kullanilir.
    surname: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // birden fazla sekilde tanimlanabilirse.
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({  // object'lerde kullanilir.
        title: PropTypes.string,
        zip: PropTypes.number
    })
};

User.defaultProps = {  // tanımlanmadıysa default deger verir.
    name: "isimsiz",
    isLoggedIn: false
}

export default User;