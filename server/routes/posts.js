import express from 'express';
import {getPosts, createPost,updatePost,deletePost,likePost} from '../controllers/posts.js';
// http://localhost:5000/posts

const router = express.Router();

router.get('/',getPosts);
router.post('/', createPost);
// router.get('/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
export default router;