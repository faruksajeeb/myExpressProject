const express = require("express");
const BlogController = require('../Controllers/blogController.js');
const BlogDetailsController = require('../Controllers/blogDetailsController.js');
const CommentController = require('../Controllers/commentController.js');
const MessageController = require('../Controllers/messageController.js');
const PortfolioController = require('../Controllers/portfolioController.js');
const ProductController = require('../Controllers/productController.js');
const ProfitController = require('../Controllers/profitController.js');
const ProjectController = require('../Controllers/projectController.js');
const ServiceController = require('../Controllers/serviceController.js');
const TitleController = require('../Controllers/titleController.js');

const router = express.Router();

// Blog Routes
router.get('/manage-blogs',BlogController.read);
router.get('/add-blog',BlogController.create);
router.get('/update-blog',BlogController.update);
router.get('/delete-blog',BlogController.delete);

// Blog Details Routes
router.get('/manage-blog-details',BlogDetailsController.read);
router.get('/add-blog-detail',BlogDetailsController.create);
router.get('/update-blog-detail',BlogDetailsController.update);
router.get('/delete-blog-detail',BlogDetailsController.delete);

// Comment Routes
router.get('/manage-comments',CommentController.read);
router.get('/add-comment',CommentController.create);
router.get('/update-comment',CommentController.update);
router.get('/delete-comment',CommentController.delete);

// Message Routes
router.get('/manage-messages',MessageController.read);
router.get('/add-message',MessageController.create);
router.get('/update-message',MessageController.update);
router.get('/delete-message',MessageController.delete);

// Portfolio Routes
router.get('/manage-portfolios',PortfolioController.read);
router.get('/add-portfolio',PortfolioController.create);
router.get('/update-portfolio',PortfolioController.update);
router.get('/delete-portfolio',PortfolioController.delete);

// Product Routes
router.get('/manage-products',ProductController.read);
router.get('/add-product',ProductController.create);
router.get('/update-product',ProductController.update);
router.get('/delete-product',ProductController.delete);

// Project Routes
router.get('/manage-projects',ProjectController.read);
router.get('/add-project',ProjectController.create);
router.get('/update-project',ProjectController.update);
router.get('/delete-project',ProjectController.delete);

// Profit Routes
router.get('/manage-profits',ProfitController.read);
router.get('/add-profit',ProfitController.create);
router.get('/update-profit',ProfitController.update);
router.get('/delete-profit',ProfitController.delete);

// Service Routes
router.get('/manage-services',ServiceController.read);
router.get('/add-service',ServiceController.create);
router.get('/update-service',ServiceController.update);
router.get('/delete-service',ServiceController.delete);

// Title Routes
router.get('/manage-titles',TitleController.read);
router.get('/add-title',TitleController.create);
router.get('/update-title',TitleController.update);
router.get('/delete-title',TitleController.delete);

module.exports = router;