import { createSlice, current } from "@reduxjs/toolkit";


const initialState = {
    bookmarked : [],
}
const bookmarkedSlice = createSlice({
    name:"bookmarkedSlice",
    initialState,
    reducers:{
        addToBookmark : (state, action) =>{
            const news = action.payload;
            // console.log(action.payload, "action payload");

            const curNews = news ? {
                imageUrl : news.urlToImage,
                title : news.title,
                content : news.content,
                author: news.author,
                publishedAt : news.publishedAt,
                url: news.url,
            } : null;
            // console.log(current(state), "state from reducer");

            const index = current(state).bookmarked.findIndex(
                (item) => item.url === curNews?.url
            )
                // console.log(index, "index ");

            if(index === -1){
                // return current(state).bookmarked.push(1);
                // return current(state).bookmarked = [...current(state).bookmarked, 1];
                return {...state, bookmarked: [...state.bookmarked, curNews]}
            }
        },
        removeFromBookmark: (state, action) => {
            const curNewsObj = action.payload;
            // console.log('curKey', curKey);

            // let index = state.bookmarked.findIndex(
            //     (item) => item.url === curKey
            // );
            const index = current(state).bookmarked.findIndex(
                (item) => item.url === curNewsObj.url
            )
            if(!index){
                // index = -1;
                return;
            }
            // if(index === -1) return;
            console.log(current(state).bookmarked[index], "This is updated value");
            if (current(state).bookmarked[index]) {
                current(state).bookmarked = current(state).bookmarked.filter(
                    (item) => item.url !== curNewsObj.url
                );
            }
        },
    }
});


export default bookmarkedSlice.reducer;

export const {addToBookmark, removeFromBookmark} = bookmarkedSlice.actions;