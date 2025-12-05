import mongoose from "mongoose"; 
const blogPostSchema = new mongoose.Schema({ 
title: String, 
content: String, 
author: String, 
createdAt: { type: Date, default: Date.now } 
}); 