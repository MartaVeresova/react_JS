import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: '14'},
        {id: 2, message: "It's my first post", likesCount: '25'}
    ]

    return (
        <div className={s.postsBlock}>
            My posts
            <div className={s.buttonBlock}>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;