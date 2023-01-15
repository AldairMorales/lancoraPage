import Link from 'next/link'
import { posts } from '../profile'

const styles = {
    inline : {
        display: 'inline-flex',
        
    },

    center : {
        margin: '0, auto',
        padding: '50px, 0'
    }
}

const PostCard = ({ post }) => {
    return (
        <div className="container col-md-4" style={styles.center}>
            <div className="card bg-dark">
                <div className="overflow">
                    <img src={`/${post.imageUrl}`}className="card-img-top" alt="" height="350px"/>
                </div>
                <div className="car-body text-center">
                    <h1 className="text-light">{post.title}</h1>
                    <Link href={`/${post.link}`} as={`/lancora/${post.link}`} className="btn btn-light" >
                        VER CARTA
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function Cartas() {
    return (
        <div className="row g-0" >
            {
                posts.map((post, i) => (
                    <PostCard post={post} key={i}/>
                ))
            }
        </div>
    )
}