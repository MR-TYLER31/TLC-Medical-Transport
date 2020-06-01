import React from 'react'
import { Link } from 'gatsby'
import Title from '../Globals/Title'
const Info = () => {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="our mission" />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti cum velit laboriosam obcaecati ad nobis aspernatur eius dolorem numquam in, hic distinctio, cupiditate magni atque expedita consectetur totam ducimus, veniam iusto perferendis nam non! Facilis delectus ut ducimus necessitatibus ipsa? Dignissimos hic ad quisquam sit dicta laborum sed voluptatibus! Iusto!
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-yellow text-uppercase">about page</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info