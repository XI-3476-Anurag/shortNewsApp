import React, { useState } from 'react'
import './NewsCard.scss';
import {useDispatch} from "react-redux";
import {BsBookmark, BsBookmarkFill} from 'react-icons/bs'
import { addToBookmark, removeFromBookmark } from '../../redux/bookmarkedSlice';

const NewsCard = (props) => {
    // console.log('hey ',props.data);
    const newsdata = props.data; //array-100
    // console.log(newsdata); 
    const dispatch = useDispatch();

    // const allBookmarkList = useSelector((state) => state.bookmarkedReducer.bookmarked);
    // console.log(allBookmarkList, "all bookmarked list");
    const [bookmarked, setBookmarked] = useState(false);
    const toggleBookmarked = (e) => {
        // console.log(e, "event");
        // const newsFound = allBookmarkList.indexOf(newsdata);
        // console.log(newsFound, "newsFound");
        if(!bookmarked)
        setBookmarked(true);
        else
        setBookmarked(false);
    }

  return (
    <div className='newsCard'>
            <div className="container">
                <div className="card">
                    <div className="top">
                        <div className="photo">
                            <img src={newsdata.urlToImage} alt="pic" className='image'/>
                        </div>
                    </div>
                    <div className="content">
                        <div className="title">
                            <h6>{newsdata.title}</h6> 
                        </div>
                        <div className="newsText">
                            {newsdata.content}
                        </div>
                    </div>
                    <div className="footer">
                        <div className="foot-box">
                            <div className="author">
                                By : {newsdata.author}
                            </div>
                            <div className="timestamp">
                                Time: {newsdata.publishedAt}
                            </div>
                            <div className="linkToNews">
                                <a href={newsdata.url} target="_blank" rel="noopener noreferrer">click here for full article...</a>
                            </div>
                        </div>
                        <div className="foot-box2" onClick={(e)=>toggleBookmarked(e)} style={{cursor:'pointer'}}>
                            {bookmarked? <BsBookmarkFill onClick={()=>dispatch(removeFromBookmark(newsdata))}/> :<BsBookmark onClick={()=>dispatch(addToBookmark(newsdata))}/>}
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default NewsCard
