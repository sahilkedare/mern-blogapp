import express from 'express';
import {getPosts, createPost,updatePost} from '../controllers/posts.js';
// http://localhost:5000/posts

const router = express.Router();

router.get('/',getPosts);
router.post('/',createPost); 
router.patch('/:id', updatePost);

export default router;