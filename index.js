import  express  from "express";
import GlobalRoute from "./routes/GlobalRoute";
import PostsRoute from './routes/PostsRoute';
import  {MiddlewarePosts}  from "./middleware/MiddlewarePosts";
const app = express();
app.set('view engine', 'ejs' )
app.use('/Posts',PostsRoute)
app.use(MiddlewarePosts)
app.use(GlobalRoute)

app.listen(4000,(req , res)=>{

    console.log('code running on 3000');

});









