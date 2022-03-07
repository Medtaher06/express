import express from "express";
import  {GetALLPosts}  from "../controllers/PostsController";

const PostsRoute = express.Router();


PostsRoute.get('/',GetALLPosts);











export default PostsRoute;