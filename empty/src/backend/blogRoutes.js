import express from "express"; 
import BlogPost from "./blogPostModel.js"; // FIX: Added .js extension 
const router = express.Router(); 
// ===== CREATE BLOG POST ===== 
router.post("/", async (req, res) => { 
// ... (Logic remains the same) ... 
}); 
// ===== GET ALL POSTS ===== 
router.get("/", async (req, res) => { 
// ... (Logic remains the same) ... 
}); 
// ===== GET SINGLE POST ===== 
router.get("/:id", async (req, res) => { 
// ... (Logic remains the same) ... 

}); 
 
export default router; 