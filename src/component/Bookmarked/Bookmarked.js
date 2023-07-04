import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {BsBookmarkFill,BsBookmark} from 'react-icons/bs';
import { removeFromBookmark } from '../../redux/bookmarkedSlice';

const Bookmarked = () => {
    const news = useSelector((state)=> state.bookmarkedReducer.bookmarked);
    console.log(news, "bookmarked news");
    console.log("hey there", news);

    const dispatch = useDispatch();
    const [bookmarked, setBookmarked] = useState(true);
    const toggleBookmarked = (e) => {
        if(bookmarked)
        setBookmarked(false);
    }
    return (
        <>
            {news.map((item)=>(
                <div className="news" key={item.url}>
                    <div className="container">
                    <div className="card">
                        <div className="top">
                            <div className="photo">
                                <img src={item.imageUrl} alt="pic" className='image'/>
                            </div>
                        </div>
                        <div className="content">
                            <div className="title">
                                <h6>{item.title}</h6> 
                            </div>
                            <div className="newsText">
                                {item.content}
                            </div>
                        </div>
                        <div className="footer">
                            <div className="foot-box">
                                <div className="author">
                                    By : {item.author}
                                </div>
                                <div className="timestamp">
                                    Time: {item.publishedAt}
                                </div>
                                <div className="linkToNews">
                                    <a href={item.url} target="_blank" rel="noopener noreferrer">click here for full article...</a>
                                </div>
                                <div className="foot-box2" onClick={(e)=>toggleBookmarked(e)} style={{cursor:'pointer'}}>
                                    {bookmarked? <BsBookmarkFill onClick={()=>dispatch(removeFromBookmark(item))}/> :<BsBookmark/>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>))}
        </>
    )
}

export default Bookmarked
